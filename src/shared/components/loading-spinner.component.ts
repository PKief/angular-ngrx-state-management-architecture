import { Component } from "@angular/core";

@Component({
  selector: "app-loading-spinner",
  standalone: true,
  template: `
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
  `,
  styles: [
    `
      .loading-spinner {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #a4a4a4a1;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #ccc;
        border-top-color: #333;
        animation: spin 1s infinite linear;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingSpinnerComponent {}
