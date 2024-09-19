using Microsoft.EntityFrameworkCore; // Para DbContext y DbSet

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
}
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    public DbSet<Item> Items { get; set; }
}
