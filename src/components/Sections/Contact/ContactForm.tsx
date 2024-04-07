import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [submitting, setSubmitting] = useState<boolean>(false); // State to handle submitting status
  const [submissionError, setSubmissionError] = useState<string | null>(null); // State to handle submission error

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitting(true); // Start submitting

      try {
        // Simulate API call (replace with actual API call)
        const response = await fetch('your-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log('Message sent successfully!');
          setData(defaultData); // Reset form fields on successful submission
          setSubmissionError(null); // Clear submission error
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send message.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setSubmissionError((error as Error).message || 'Failed to send message.'); // Set submission error message
      } finally {
        setSubmitting(false); // Stop submitting
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input
        className={inputClasses}
        disabled={submitting} // Disable input while submitting
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
        type="text"
        value={data.name}
      />
      <input
        autoComplete="email"
        className={inputClasses}
        disabled={submitting}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        disabled={submitting}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        disabled={submitting} // Disable button while submitting
        type="submit"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      {submissionError && <p className="text-red-500">{submissionError}</p>}{' '}
      {/* Display submission error message if any */}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
