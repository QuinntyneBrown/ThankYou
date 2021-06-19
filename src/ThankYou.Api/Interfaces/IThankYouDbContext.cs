using ThankYou.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace ThankYou.Api.Interfaces
{
    public interface IThankYouDbContext
    {
        DbSet<Interaction> Interactions { get; }
        DbSet<Participant> Participants { get; }
        DbSet<InteractionParticipant> InteractionParticipants { get; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);

    }
}
