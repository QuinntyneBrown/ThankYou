using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class UpdateParticipant
    {
        public class Validator: AbstractValidator<Request>
        {
            public Validator()
            {
                RuleFor(request => request.Participant).NotNull();
                RuleFor(request => request.Participant).SetValidator(new ParticipantValidator());
            }
        
        }

        public class Request: IRequest<Response>
        {
            public ParticipantDto Participant { get; set; }
        }

        public class Response: ResponseBase
        {
            public ParticipantDto Participant { get; set; }
        }

        public class Handler: IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;
        
            public Handler(IThankYouDbContext context)
                => _context = context;
        
            public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
            {
                var participant = await _context.Participants.SingleAsync(x => x.ParticipantId == request.Participant.ParticipantId);
                
                await _context.SaveChangesAsync(cancellationToken);
                
                return new Response()
                {
                    Participant = participant.ToDto()
                };
            }
            
        }
    }
}
