using FluentValidation;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;
using ThankYou.Api.Models;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;

namespace ThankYou.Api.Features
{
    public class RemoveInteraction
    {
        public class Request: IRequest<Response>
        {
            public Guid InteractionId { get; set; }
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
                var interaction = await _context.Interactions.SingleAsync(x => x.InteractionId == request.InteractionId);
                
                _context.Interactions.Remove(interaction);
                
                await _context.SaveChangesAsync(cancellationToken);
                
                return new Response()
                {
                    Interaction = interaction.ToDto()
                };
            }
            
        }
    }
}
