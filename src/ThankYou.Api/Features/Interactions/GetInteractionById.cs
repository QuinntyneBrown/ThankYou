using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Core;
using ThankYou.Api.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ThankYou.Api.Features
{
    public class GetInteractionById
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
                return new () {
                    Interaction = (await _context.Interactions.SingleOrDefaultAsync(x => x.InteractionId == request.InteractionId)).ToDto()
                };
            }
            
        }
    }
}
