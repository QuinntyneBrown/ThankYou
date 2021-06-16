using System;
using ThankYou.Api.Models;

namespace ThankYou.Api.Features
{
    public static class ParticipantExtensions
    {
        public static ParticipantDto ToDto(this Participant participant)
        {
            return new ()
            {
                ParticipantId = participant.ParticipantId
            };
        }
        
    }
}
