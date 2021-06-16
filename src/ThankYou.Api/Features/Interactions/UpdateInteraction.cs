using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class UpdateInteraction
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
                var interaction = await _context.Interactions.SingleAsync(x => x.InteractionId == request.Interaction.InteractionId);

                interaction.Update(request.Interaction.Date, request.Interaction.Description);
                
                await _context.SaveChangesAsync(cancellationToken);
                
                return new ()
                {
                    Interaction = interaction.ToDto()
                };
            }
            
        }
    }
}
