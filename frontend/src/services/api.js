const API_BASE = import.meta.env.VITE_API_BASE || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.detail || data?.message || response.statusText || 'Request failed';
    throw new Error(message);
  }

  return data;
}

export const api = {
  getNews: () => request('/news'),
  getIndustries: () => request('/industries'),
  getIndustryById: (id) => request(`/industries/${id}`),
  generateReport: (payload) => request('/reports/generate', { method: 'POST', body: JSON.stringify(payload) }),
  getForumPosts: () => request('/forum/posts'),
  getForumPost: (postId) => request(`/forum/posts/${postId}`),
  createForumPost: (payload) => request('/forum/posts', { method: 'POST', body: JSON.stringify(payload) }),
  createComment: (postId, payload) => request(`/forum/posts/${postId}/comments`, { method: 'POST', body: JSON.stringify(payload) }),
  likePost: (postId) => request(`/forum/posts/${postId}/like`, { method: 'POST' }),
  translateTexts: (payload) =>
  request('/translate', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
};
