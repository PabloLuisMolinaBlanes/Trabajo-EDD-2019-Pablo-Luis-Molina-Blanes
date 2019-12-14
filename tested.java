package prueba;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class tested extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JPasswordField passwordField;
	private JTextField textField_1;
	private JTextField textField_2;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					tested frame = new tested();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public tested() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblIntroduceTusDatos = new JLabel("INTRODUCCI\u00D3N DE CLIENTES");
		lblIntroduceTusDatos.setBounds(159, 5, 270, 14);
		contentPane.add(lblIntroduceTusDatos);
		
		JLabel lblContrasea = new JLabel("Apellidos:");
		lblContrasea.setBounds(5, 64, 60, 14);
		lblContrasea.setVerticalAlignment(SwingConstants.TOP);
		contentPane.add(lblContrasea);
		
		JLabel lblUsuario = new JLabel("Nombre:");
		lblUsuario.setVerticalAlignment(SwingConstants.TOP);
		lblUsuario.setBounds(5, 43, 60, 14);
		contentPane.add(lblUsuario);
		
		textField = new JTextField();
		textField.setBounds(75, 40, 86, 20);
		contentPane.add(textField);
		textField.setColumns(10);
		
		passwordField = new JPasswordField();
		passwordField.setBounds(112, 64, -31, 14);
		contentPane.add(passwordField);
		
		JButton btnNewButton = new JButton("Enviar");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
			}
		});
		btnNewButton.setBounds(38, 134, 89, 23);
		contentPane.add(btnNewButton);
		
		JLabel lblEmail = new JLabel("Email:");
		lblEmail.setVerticalAlignment(SwingConstants.TOP);
		lblEmail.setBounds(5, 83, 60, 14);
		contentPane.add(lblEmail);
		
		textField_1 = new JTextField();
		textField_1.setColumns(10);
		textField_1.setBounds(75, 80, 86, 20);
		contentPane.add(textField_1);
		
		textField_2 = new JTextField();
		textField_2.setBounds(75, 61, 86, 20);
		contentPane.add(textField_2);
		textField_2.setColumns(10);
	}
}
