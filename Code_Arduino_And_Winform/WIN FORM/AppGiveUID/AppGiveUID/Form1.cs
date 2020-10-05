using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.IO.Ports;
using System.Xml;

namespace AppGiveUID
{
    public partial class Form1 : Form
    {
        string ReceiveData = string.Empty;
        string TransmitData = string.Empty;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            serial_Port.PortName = "Select COM Port...";
            serial_Port.BaudRate = 9600;
            serial_Port.DataBits = 8;
            serial_Port.Parity = Parity.None;
            serial_Port.StopBits = StopBits.One;
            string[] ports = SerialPort.GetPortNames();
            foreach (string port in ports)
            {
                comboBox_COMPort.Items.Add(port);
            }


        }
       

        private void button_Connect_Click(object sender, EventArgs e)
        {
            if (comboBox_COMPort.Text == "")
                MessageBox.Show("Select COM Port.", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            else if (comboBox_BaudRate.Text == "")
                MessageBox.Show("Select baudrate for COM Port.", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            else
            {
                try
                {
                    if (serial_Port.IsOpen)
                    {
                        MessageBox.Show("COM comboBox_COMPort is ConnectionState and ready for use.", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                    else
                    {
                        serial_Port.Open();
                        MessageBox.Show(comboBox_COMPort.Text + "is connect.", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        textBox_Status.BackColor = Color.Lime;
                        textBox_Status.Text = "Connecting...";
                        comboBox_COMPort.Enabled = false;
                        comboBox_BaudRate.Enabled = false;
                        ReceiveData = String.Empty;
                        TransmitData = String.Empty;
                    }
                }
                catch (Exception)
                {
                    textBox_Status.BackColor = Color.Red;
                    textBox_Status.Text = "Disconnected!";
                    MessageBox.Show("COM Port is not found. Please check your COM or Cable.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
        }


        private void comboBox_BaudRate_SelectedIndexChanged(object sender, EventArgs e)
        {
            serial_Port.Close();
            textBox_Status.BackColor = Color.Red;
            textBox_Status.Text = "Disconnected!";
            serial_Port.PortName = comboBox_COMPort.Text;
        }

        private void Serial_Port_DataReceived(object sender, SerialDataReceivedEventArgs e)
        {
            CheckForIllegalCrossThreadCalls = false;
            string entrada = serial_Port.ReadLine();      
            textBox_UID.Text = entrada;

        }

        

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (serial_Port.IsOpen)
                serial_Port.Close();

        }
    }
}
