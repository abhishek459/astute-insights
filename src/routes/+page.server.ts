// src/routes/+page.server.ts

import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

// This is your Google Apps Script URL.
// It's better to store this as an environment variable for security.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbztLKfNklZ9wsRAESUr6rHv0wIK5HcQY6j7xtYhxliQSCyOhVwb8Ut-6JZh4rHpylHHpg/exec";

export const actions: Actions = {
  // This 'default' action will handle the form submission
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');

    // Basic validation
    if (!email) {
      return fail(400, { email, error: 'Email is required.' });
    }

    try {
      // The server makes the request, no CORS issues!
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      
      // We can properly check the response from the Google Script here.
      // Note: Google Scripts often redirect, so we check for redirect statuses too.
      if (response.status >= 200 && response.status < 400) {
         return { success: true, message: 'Thank you for contributing!' };
      } else {
         // The script returned an error
         const errorData = await response.json();
         return fail(response.status, { email, error: errorData.error || 'Submission failed.' });
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      return fail(500, { email, error: 'Something went wrong on our end.' });
    }
  },
};