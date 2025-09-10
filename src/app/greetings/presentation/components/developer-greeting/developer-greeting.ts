import {Component, computed, input} from '@angular/core';
import {Developer} from '../../../domain/model/developer';

/**
 * A component that displays a greeting message for a developer.
 *
 * @remarks
 * This component uses Angular's reactive features to manage state and compute
 * derived values. It takes the first name and last name of a developer as inputs
 * and computes the full name. If both names are empty, it defaults to "Anonymous Developer".
 * The component also determines if the developer is registered based on the presence
 * of the first and last names.
 */
@Component({
  selector: 'app-developer-greeting',
  imports: [],
  templateUrl: './developer-greeting.html',
  styleUrl: './developer-greeting.css'
})
export class DeveloperGreeting {
  /**
   * The first name of the developer.
   *
   * @remarks
   * This is an input property that can be set from outside the component.
   * It defaults to an empty string.
   */
  firstName = input<string>('');

  /**
   * The last name of the developer.
   *
   * @remarks
   * This is an input property that can be set from outside the component.
   * It defaults to an empty string.
   */
  lastName = input<string>('');

  /**
   * The full name of the developer.
   *
   * @remarks
   * This is a computed property that derives its value from the firstName and lastName inputs.
   * If both names are empty, it returns "Anonymous Developer". Otherwise, it constructs the full name using the Developer model.
   */
  fullName = computed(() => {
    if (!this.firstName() && !this.lastName())
      return 'Anonymous Developer';
    const developer = new Developer(this.firstName(), this.lastName());
    return developer.fullName;
  });

  /**
   * Indicates whether the developer is registered.
   *
   * @remarks
   * This is a computed property that returns true if either the first name or last name is empty,
   * indicating that the developer is not fully registered.
   */
  isRegistered = computed(() => this.firstName() && this.lastName());

}
