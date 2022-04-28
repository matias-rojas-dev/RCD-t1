using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;


namespace WSClientSoap
{
    public partial class HomeClient : System.Web.UI.Page
    {

        WSServerSoap.MetodosRCDClient ws = new WSServerSoap.MetodosRCDClient();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void checkCode_TextChanged(object sender, EventArgs e)
        {

        }

        protected void name_result_Click(object sender, EventArgs e)
        {
            String dato = name_inputCompleteName.Text.ToString();
            //String response = ws.ValidacionNombre(name);
            //name_response.Text = response;

            //List<string> locations;
            StringBuilder sb = new StringBuilder();

                
            //string [] name = {"Nombres", "Matías", "Ignacio", "David", "Andres", "Apellidos", "Apellido paterno: Tapia", "Apellido materno: Rojas"};
            string[] name = ws.ValidacionNombre(dato);

            int [] mainValues = {name.Length - 3}; // {5}
			foreach(var item in name){ // 0
		    foreach(var index in mainValues){ // nombres: 0
                if (Array.IndexOf(name, item) == index || Array.IndexOf(name, item) == 0 )
                {
                    sb.Append("<ul>");
                    sb.Append("<h2>" + item + "</h2>");
                }

                if(!Array.Exists(mainValues, element => element == Array.IndexOf(name, item)) && Array.IndexOf(name, item) != 0 )
                {
                    sb.Append("<li>" + item + "</li>");
                }

			    } // end first for
                sb.Append("</ul>");
		    } // end first for

            litMarkup.Text = sb.ToString();

        }

        protected void rut_result_Click(object sender, EventArgs e)
        {
            String rut = rut_withoutCheckCode.Text.ToString();
            String dv = rut_checkCode.Text.ToString();
            if ((ws.ValidacionRut(rut, dv).ToString()).Equals("True"))
            {
                rut_response.Text = "El digito validador ingresado es correcto";
            }
            else
            {
                rut_response.Text = "Oops! El digito verificador no corresponde";
            }
        }
    }
}