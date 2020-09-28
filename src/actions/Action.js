export const setActiveSession = (session) => ({
  type: "SET_ACTIVE_SESSION",
  payload: session,
});

export const updateCounter = (type, activeSession) => ({
  type,
  payload: activeSession,
});
