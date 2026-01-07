import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AUTH_STORAGE_KEY = 'ecg_auth';
const DEFAULT_EMAIL = 'admin@gmail.com';
const DEFAULT_PASSWORD = '12345';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.email) setUser({ email: parsed.email });
    } catch {
      // ignore
    }
  }, []);

  const login = (email, password) => {
    const e = String(email ?? '').trim();
    const p = String(password ?? '').trim();
    if (e === DEFAULT_EMAIL && p === DEFAULT_PASSWORD) {
      const nextUser = { email: e };
      setUser(nextUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ email: e, ts: Date.now() }));
      return { ok: true };
    }
    return { ok: false, message: 'Invalid email or password.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      defaults: { email: DEFAULT_EMAIL, password: DEFAULT_PASSWORD },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}


