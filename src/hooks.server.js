/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const theme = event.cookies.get('theme');

  return resolve(event, {
    transformPageChunk: ({ html }) => {
      if (theme === 'dark' || theme === 'light') {
        return html.replace('<html', `<html data-theme="${theme}"`);
      }
      return html;
    }
  });
}
