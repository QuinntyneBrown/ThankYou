using System;
using ThankYou.Api.Models;

namespace ThankYou.Api.Features
{
    public static class InteractionExtensions
    {
        public static InteractionDto ToDto(this Interaction interaction)
        {
            return new ()
            {
                InteractionId = interaction.InteractionId
            };
        }
        
    }
}
