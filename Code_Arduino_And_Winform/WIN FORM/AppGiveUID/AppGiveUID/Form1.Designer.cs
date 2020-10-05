namespace AppGiveUID
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.button_Connect = new System.Windows.Forms.Button();
            this.groupBox_setting = new System.Windows.Forms.GroupBox();
            this.comboBox_COMPort = new System.Windows.Forms.ComboBox();
            this.textBox_Status = new System.Windows.Forms.TextBox();
            this.comboBox_BaudRate = new System.Windows.Forms.ComboBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.label5 = new System.Windows.Forms.Label();
            this.textBox_UID = new System.Windows.Forms.TextBox();
            this.serial_Port = new System.IO.Ports.SerialPort(this.components);
            this.label1 = new System.Windows.Forms.Label();
            this.groupBox_setting.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(10, 47);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(58, 13);
            this.label2.TabIndex = 1;
            this.label2.Text = "Baud Rate";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(10, 25);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 13);
            this.label3.TabIndex = 2;
            this.label3.Text = "COM Port";
            // 
            // button_Connect
            // 
            this.button_Connect.Location = new System.Drawing.Point(100, 105);
            this.button_Connect.Name = "button_Connect";
            this.button_Connect.Size = new System.Drawing.Size(75, 23);
            this.button_Connect.TabIndex = 3;
            this.button_Connect.Text = "Connect";
            this.button_Connect.UseVisualStyleBackColor = true;
            this.button_Connect.Click += new System.EventHandler(this.button_Connect_Click);
            // 
            // groupBox_setting
            // 
            this.groupBox_setting.Controls.Add(this.comboBox_COMPort);
            this.groupBox_setting.Controls.Add(this.textBox_Status);
            this.groupBox_setting.Controls.Add(this.comboBox_BaudRate);
            this.groupBox_setting.Controls.Add(this.label2);
            this.groupBox_setting.Controls.Add(this.label3);
            this.groupBox_setting.Controls.Add(this.button_Connect);
            this.groupBox_setting.Location = new System.Drawing.Point(2, 25);
            this.groupBox_setting.Name = "groupBox_setting";
            this.groupBox_setting.Size = new System.Drawing.Size(284, 134);
            this.groupBox_setting.TabIndex = 5;
            this.groupBox_setting.TabStop = false;
            this.groupBox_setting.Text = "SETUP";
            // 
            // comboBox_COMPort
            // 
            this.comboBox_COMPort.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBox_COMPort.FormattingEnabled = true;
            this.comboBox_COMPort.Location = new System.Drawing.Point(76, 17);
            this.comboBox_COMPort.Name = "comboBox_COMPort";
            this.comboBox_COMPort.Size = new System.Drawing.Size(121, 21);
            this.comboBox_COMPort.TabIndex = 11;
            // 
            // textBox_Status
            // 
            this.textBox_Status.BackColor = System.Drawing.Color.Red;
            this.textBox_Status.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.textBox_Status.Location = new System.Drawing.Point(76, 71);
            this.textBox_Status.Name = "textBox_Status";
            this.textBox_Status.Size = new System.Drawing.Size(121, 20);
            this.textBox_Status.TabIndex = 9;
            this.textBox_Status.Text = "Disconnected!";
            this.textBox_Status.TextAlign = System.Windows.Forms.HorizontalAlignment.Center;
            // 
            // comboBox_BaudRate
            // 
            this.comboBox_BaudRate.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBox_BaudRate.FormattingEnabled = true;
            this.comboBox_BaudRate.Items.AddRange(new object[] {
            "2400",
            "4800",
            "9600",
            "19200"});
            this.comboBox_BaudRate.Location = new System.Drawing.Point(76, 44);
            this.comboBox_BaudRate.Name = "comboBox_BaudRate";
            this.comboBox_BaudRate.Size = new System.Drawing.Size(121, 21);
            this.comboBox_BaudRate.TabIndex = 8;
            this.comboBox_BaudRate.SelectedIndexChanged += new System.EventHandler(this.comboBox_BaudRate_SelectedIndexChanged);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.label5);
            this.groupBox2.Controls.Add(this.textBox_UID);
            this.groupBox2.Location = new System.Drawing.Point(2, 165);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(284, 61);
            this.groupBox2.TabIndex = 7;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Comunicaton";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(94, 16);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(56, 13);
            this.label5.TabIndex = 9;
            this.label5.Text = "Data send";
            // 
            // textBox_UID
            // 
            this.textBox_UID.Location = new System.Drawing.Point(36, 35);
            this.textBox_UID.Name = "textBox_UID";
            this.textBox_UID.Size = new System.Drawing.Size(161, 20);
            this.textBox_UID.TabIndex = 8;
            // 
            // serial_Port
            // 
            this.serial_Port.DataReceived += new System.IO.Ports.SerialDataReceivedEventHandler(this.Serial_Port_DataReceived);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(79, 10);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(44, 13);
            this.label1.TabIndex = 8;
            this.label1.Text = "Nhóm 5";
            this.label1.UseMnemonic = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(298, 232);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox_setting);
            this.Name = "Form1";
            this.Text = "APP Transmision";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox_setting.ResumeLayout(false);
            this.groupBox_setting.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button button_Connect;
        private System.Windows.Forms.GroupBox groupBox_setting;
        private System.Windows.Forms.TextBox textBox_Status;
        private System.Windows.Forms.ComboBox comboBox_BaudRate;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.ComboBox comboBox_COMPort;
        private System.Windows.Forms.TextBox textBox_UID;
        private System.IO.Ports.SerialPort serial_Port;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label1;
    }
}

