import { AuthProvider } from './src/contexts/authContext'

import Layout from './Layout'

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  )
}