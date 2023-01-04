import { ColorModeContext, useMode } from './theme.js';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { Routes,Route } from "react-router-dom"
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar.jsx';
import Dashboard from './scenes/dashboard';
/* import Team from './scenes/dashboard/team.jsx'; */
/* import Invoices from './scenes/invoices.jsx'; */
/* import Contacts from './scenes/contacts.jsx'; */
/* import Bar from './scenes/bar.jsx'; */
/* import Form from './scenes/form.jsx'; */
/* import Line from './scenes/line.jsx'; */
/* import Pie from './scenes/pie.jsx'; */
/* import FAQ from './scenes/faq.jsx'; */
/* import Geography from './scenes/geography.jsx'; */
/* import Calendar from './scenes/calendar.jsx'; */



function App() {
  const [theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              {/* <Route path='/team' element={<Team/>} /> */}
              {/* <Route path='/invioces' element={<Invoices/>} /> */}
              {/* <Route path='/contacts' element={<Contacts/>} /> */}
              {/* <Route path='/bar' element={<Bar/>} /> */}
              {/* <Route path='/form' element={<Form/>} /> */}
              {/* <Route path='/line' element={<Line/>} /> */}
              {/* <Route path='/pie' element={<Pie/>} /> */}
              {/* <Route path='/faq' element={<FAQ/>} /> */}
              {/* <Route path='/geography' element={<Geography/>} /> */}
              {/* <Route path='/calendar' element={<Calendar/>} /> */}

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
