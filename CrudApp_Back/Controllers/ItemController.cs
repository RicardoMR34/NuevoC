using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; 
using System.Collections.Generic; 
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ItemsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ItemsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Item>>> GetItems() => await _context.Items.ToListAsync();

  [HttpGet("{id}")]
public async Task<ActionResult<Item>> GetItem(int id)
{
    var item = await _context.Items.FindAsync(id);
    if (item == null) return NotFound();
    return item;
}


    [HttpPost]
    public async Task<ActionResult<Item>> CreateItem(Item item)
    {
        _context.Items.Add(item);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetItems), new { id = item.Id }, item);
    }

   [HttpPut("{id}")]
public async Task<IActionResult> UpdateItem(int id, Item item)
{
    if (id != item.Id) return BadRequest("ID mismatch");

    var existingItem = await _context.Items.FindAsync(id);
    if (existingItem == null) return NotFound("Item not found");

    // Actualizar propiedades
    existingItem.Name = item.Name;
    existingItem.Description = item.Description;

    // Guardar cambios
    await _context.SaveChangesAsync();
    return NoContent();
}

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteItem(int id)
    {
        var item = await _context.Items.FindAsync(id);
        if (item == null) return NotFound();
        _context.Items.Remove(item);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
