using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace WSClientSoap
{
    public class Log
    {
        private string Path = "";

        public Log(string Path)
        {
            this.Path = Path;
        }

        public void Add(string sLog)
        {
            CreateDirectory();
            string name = GetNameFile();
            string text = "";

            text+=DateTime.Now+" - "+sLog + Environment.NewLine;

            StreamWriter sw = new StreamWriter(Path+"/"+name,true);
            sw.Write(text);
            sw.Close();
        }

        #region HELPER
        private string GetNameFile()
        {
            string name = "";
            name = "log_" + DateTime.Now.Day+"_"+DateTime.Now.Month+"_"+DateTime.Now.Year+".txt";  
            return name;
        }
        private bool CreateDirectory()
        {
            try
            {
                if (!Directory.Exists(Path))
                    Directory.CreateDirectory(Path);

                return true;
            } 
            catch(DirectoryNotFoundException ex)
            {
                throw new Exception(ex.Message);
                return false;
            }
        }
        #endregion
    }
}