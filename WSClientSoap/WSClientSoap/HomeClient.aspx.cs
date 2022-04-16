using System;
using System.Collections.Generic;
using System.Linq;
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
            String name = name_inputCompleteName.Text.ToString();
                String response = ws.ValidacionNombre(name);
                name_response.Text = response;
            

            
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