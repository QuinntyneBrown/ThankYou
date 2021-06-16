using ThankYou.Api.Models;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Data
{
    public class ThankYouDbContext: DbContext, IThankYouDbContext
    {
        public DbSet<Interaction> Interactions { get; private set; }
        public DbSet<Participant> Participants { get; private set; }
        public DbSet<InteractionParticipant> InteractionParticipants { get; private set; }
        public ThankYouDbContext(DbContextOptions options)
            :base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ThankYouDbContext).Assembly);
        }
        
    }
}
