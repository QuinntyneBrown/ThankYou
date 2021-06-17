using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ThankYou.Api.Extensions;
using ThankYou.Api.Interfaces;

namespace ThankYou.Api.Features
{
    public class SearchInteractions
    {
        public class Request : IRequest<Response> {
            public string PropertyName { get; set; } = "Description";
            public string SearchTerm { get; set; }
        }

        public class Response
        {
            public List<InteractionDto> Interactions { get; set; }
        }

        public class Handler : IRequestHandler<Request, Response>
        {
            private readonly IThankYouDbContext _context;

            public Handler(IThankYouDbContext context){
                _context = context;
            }

            public async Task<Response> Handle(Request request, CancellationToken cancellationToken) {
			    return new () { 
                    Interactions = _context.Interactions
                    .Search(request.PropertyName, request.SearchTerm)
                    .Select(x => x.ToDto()).ToList()
                };
            }
        }
    }
}
