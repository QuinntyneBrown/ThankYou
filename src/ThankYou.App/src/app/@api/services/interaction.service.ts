import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { Interaction } from '@api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPagableService } from '@core/ipagable-service';
import { EntityPage } from '@core/entity-page';

@Injectable({
  providedIn: 'root'
})
export class InteractionService implements IPagableService<Interaction> {

  uniqueIdentifierName: string = "interactionId";

  constructor(
    @Inject(baseUrl) private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  getPage(options: { pageIndex: number; pageSize: number; }): Observable<EntityPage<Interaction>> {
    return this._client.get<EntityPage<Interaction>>(`${this._baseUrl}api/interaction/page/${options.pageSize}/${options.pageIndex}`)
  }

  public get(): Observable<Interaction[]> {
    return this._client.get<{ interactions: Interaction[] }>(`${this._baseUrl}api/interaction`)
      .pipe(
        map(x => x.interactions)
      );
  }

  public getById(options: { interactionId: string }): Observable<Interaction> {
    return this._client.get<{ interaction: Interaction }>(`${this._baseUrl}api/interaction/${options.interactionId}`)
      .pipe(
        map(x => x.interaction)
      );
  }

  public remove(options: { interaction: Interaction }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/interaction/${options.interaction.interactionId}`);
  }

  public create(options: { interaction: Interaction }): Observable<{ interaction: Interaction }> {
    return this._client.post<{ interaction: Interaction }>(`${this._baseUrl}api/interaction`, { interaction: options.interaction });
  }
  
  public update(options: { interaction: Interaction }): Observable<{ interaction: Interaction }> {
    return this._client.put<{ interaction: Interaction }>(`${this._baseUrl}api/interaction`, { interaction: options.interaction });
  }
}
