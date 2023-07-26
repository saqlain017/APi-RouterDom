import React from 'react'
import './app.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Error} from './pages/Error404'
import Navbar from './Components/Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App(){     
    const client = new QueryClient({defaultOptions:
        {queries: {
            refetchOnWindowFocus:false,
            },
        },
    });  
    return(  
        <QueryClientProvider client={client}>      
         <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path="*" element={<Error />} />
            </Routes>
         </Router>
         </QueryClientProvider>
        
    )
}

export default App