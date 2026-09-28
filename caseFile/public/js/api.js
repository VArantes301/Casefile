async function api(path, options) {
  const res = await fetch(API_BASE + path, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  let data;
  try {
    data = await res.json();
  } catch (e) {
    throw new Error('The server sent back something unexpected.');
  }

  if (!res.ok) throw new Error(data.error || 'Something went wrong.');
  return data;
}
