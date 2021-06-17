using System.Net;
using System.Threading.Tasks;
using ThankYou.Api.Features;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ThankYou.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParticipantController
    {
        private readonly IMediator _mediator;

        public ParticipantController(IMediator mediator)
            => _mediator = mediator;

        [HttpGet("{participantId}", Name = "GetParticipantByIdRoute")]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.NotFound)]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetParticipantById.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetParticipantById.Response>> GetById([FromRoute]GetParticipantById.Request request)
        {
            var response = await _mediator.Send(request);
        
            if (response.Participant == null)
            {
                return new NotFoundObjectResult(request.ParticipantId);
            }
        
            return response;
        }

        [HttpGet("search/{propertyName}/{searchTerm}", Name = "SearchParticipantsRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(SearchParticipants.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<SearchParticipants.Response>> Search([FromRoute] SearchParticipants.Request request)
            => await _mediator.Send(request);

        [HttpGet(Name = "GetParticipantsRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetParticipants.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetParticipants.Response>> Get()
            => await _mediator.Send(new GetParticipants.Request());
        
        [HttpPost(Name = "CreateParticipantRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(CreateParticipant.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<CreateParticipant.Response>> Create([FromBody]CreateParticipant.Request request)
            => await _mediator.Send(request);
        
        [HttpGet("page/{pageSize}/{index}", Name = "GetParticipantsPageRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(GetParticipantsPage.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<GetParticipantsPage.Response>> Page([FromRoute]GetParticipantsPage.Request request)
            => await _mediator.Send(request);
        
        [HttpPut(Name = "UpdateParticipantRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(UpdateParticipant.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UpdateParticipant.Response>> Update([FromBody]UpdateParticipant.Request request)
            => await _mediator.Send(request);
        
        [HttpDelete("{participantId}", Name = "RemoveParticipantRoute")]
        [ProducesResponseType((int)HttpStatusCode.InternalServerError)]
        [ProducesResponseType(typeof(ProblemDetails), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(RemoveParticipant.Response), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<RemoveParticipant.Response>> Remove([FromRoute]RemoveParticipant.Request request)
            => await _mediator.Send(request);
        
    }
}
