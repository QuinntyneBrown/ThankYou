using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;
using ThankYou.Api.Features;

namespace ThankYou.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InteractionController
    {
        private readonly IMediator _mediator;

        public InteractionController(IMediator mediator)
            => _mediator = mediator;

        [HttpGet("{interactionId}", Name = "GetInteractionByIdRoute")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetInteractionById.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetInteractionById.Response>> GetById([FromRoute] GetInteractionById.Request request)
        {
            var response = await _mediator.Send(request);

            if (response.Interaction == null)
            {
                return new NotFoundObjectResult(request.InteractionId);
            }

            return response;
        }

        [HttpGet(Name = "GetInteractionsRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetInteractions.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetInteractions.Response>> Get()
            => await _mediator.Send(new GetInteractions.Request());

        [HttpGet("search/{propertyName}/{searchTerm}", Name = "SearchInteractionsRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(SearchInteractions.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<SearchInteractions.Response>> Get([FromRoute] SearchInteractions.Request request)
            => await _mediator.Send(request);

        [HttpPost(Name = "CreateInteractionRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateInteraction.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<CreateInteraction.Response>> Create([FromBody] CreateInteraction.Request request)
            => await _mediator.Send(request);

        [HttpGet("page/{pageSize}/{index}", Name = "GetInteractionsPageRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetInteractionsPage.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetInteractionsPage.Response>> Page([FromRoute] GetInteractionsPage.Request request)
            => await _mediator.Send(request);

        [HttpPut(Name = "UpdateInteractionRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateInteraction.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpdateInteraction.Response>> Update([FromBody] UpdateInteraction.Request request)
            => await _mediator.Send(request);

        [HttpDelete("{interactionId}", Name = "RemoveInteractionRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(RemoveInteraction.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<RemoveInteraction.Response>> Remove([FromRoute] RemoveInteraction.Request request)
            => await _mediator.Send(request);

    }
}
