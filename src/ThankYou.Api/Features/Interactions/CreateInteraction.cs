using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Models;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using System.Collections.Generic;

namespace ThankYou.Api.Features
{
    public class CreateInteraction
    {
        public class Validator: AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(request => request.Interaction).NotNull();
                RuleFor(request => request.Interaction).SetValidator(new InteractionValidator());
            }
        
        }

        public class Request: IRequest<Response>
        {
            public InteractionDto Interaction { get; set; }
        }

        public class Response: ResponseBase
        {
            public InteractionDto Interaction { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;
        
            public Handler(IThankYouDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                List<Participant> participants = new List<Participant>();

                foreach(var participant in request.Interaction.Participants)
                {
                    participants.Add(_context.Participants.Find(participant.ParticipantId));
                }

                var interaction = new Interaction(request.Interaction.Date, participants, request.Interaction.Description);
                
                _context.Interactions.Add(interaction);
                
                await _context.SaveChangesAsync(cancellationToken);
                
                return new Response()
                {
                    Interaction = interaction.ToDto()
                };
            }
            
        }
    }
}
