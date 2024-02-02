import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      //here it says if /api is there it will apend the localhost to it
      //now it solves the issue of cors as it thinks that req is coming from 
      //the same port 
      '/api':'http://localhost:3000'
    }
  },
  plugins: [react()],
})
