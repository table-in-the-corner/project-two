import { LitElement, html, css } from 'lit';
import './SciCard.js';

export class CardFrame extends LitElement{
    static get tag(){
    return 'card-frame';
}


render(){
    return html`
    <div>
        <sci-card></sci-card>
    </div>
    
    `;
    }
}