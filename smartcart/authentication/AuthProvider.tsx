// Global session state. Context wraps entire app
//import { createContext, useContext, useEffect, useState } from "react"
//import { supabase } from "../supabaseClient"
//
//type AuthContextType = {
//  session: any;
//  loading: boolean;
//};
//
//const AuthContext = createContext<AuthContextType>({
//  session: null,
//  loading: true,
//});
//
//export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//  const [session, setSession] = useState<any>(null);
//  const [loading, setLoading] = useState(true);
//
//  useEffect(() => {
//    supabase.auth.getSession().then(({ data }) => {
//      setSession(data.session);
//      setLoading(false);
//    });
//
//    const { data: listener } = supabase.auth.onAuthStateChange(
//      (_event, session) => {
//        setSession(session);
//      }
//    );
//
//    return () => listener.subscription.unsubscribe();
//  }, []);
//
//  return (
//    <AuthContext.Provider value={{ session, loading }}>
//      {children}
//    </AuthContext.Provider>
//  );
//};
//
//export const useAuth = () => useContext(AuthContext);
//
//// Login
//export async function signIn(email: string, password: string) {
//  let { error, data } = await supabase.auth.signInWithPassword({
//    email,
//    password
//  });
//
//  if (error) throw error;
//
//  return data;
//}
//
//// Signup
//export async function signUp(email: string, password: string) {
//  const { data, error } = await supabase.auth.signUp({
//    email,
//    password
//  });
//
//  if (error) throw error;
//
//  return data;
//}
//
//// Logout
//export async function signOut() {
//  await supabase.auth.signOut();
//}
//