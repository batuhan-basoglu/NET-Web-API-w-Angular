namespace Api.Models;

public class Item
{
    public string? Author { get; set; }
    public string? AuthorId { get; set; }
    public long Id { get; set; }
    public string? Likes { get; set; }
    public string? Popularity { get; set; }
    public string? Reads { get; set; }
    public string[]? Tags { get; set; }
}