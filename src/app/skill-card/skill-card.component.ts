import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  template: ` <img class="icon" [src]="iconPath" />
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <button class="btn btn-link">Get Started</button>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillCardComponent {
  @Input() iconPath = '';
  @Input() title = '';
  @Input() text = '';
}
