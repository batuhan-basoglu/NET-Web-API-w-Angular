using Microsoft.EntityFrameworkCore;

namespace Api.Models;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }

    public DbSet<Item> Items { get; set; } = null!;
}