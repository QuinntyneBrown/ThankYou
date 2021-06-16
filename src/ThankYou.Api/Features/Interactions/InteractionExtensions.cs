using System;
using System.Linq;
using ThankYou.Api.Models;

namespace ThankYou.Api.Features
{
    public static class InteractionExtensions
    {
        public static InteractionDto ToDto(this Interaction interaction)
        {
            return new ()
            {
                InteractionId = interaction.InteractionId,
                Date = interaction.Date,
                Description = interaction.Description,
                Participants = interaction.InteractionParticipants?.Select(x => x.Participant.ToDto()).ToList()
            };
        }
        
    }
}
