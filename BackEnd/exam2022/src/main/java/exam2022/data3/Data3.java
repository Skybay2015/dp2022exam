package exam2022.data3;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



	
@Entity
@Table(name="tablename1")
public class Data3 {
	@Id
	@GeneratedValue	
	private int prkey;
	private String title5;
	private long age;
	
	public Data3() {
	}
	
	public Data3(int prkey, String title5, long age) {
		super();
		this.prkey = prkey;
		this.title5 = title5;
		this.age = age;
	}

	public int getPrkey() {
		return prkey;
	}

	public void setPrkey(int prkey) {
		this.prkey = prkey;
	}

	public String getTitle5() {
		return title5;
	}

	public void setTitle5(String title5) {
		this.title5 = title5;
	}

	public long getAge() {
		return age;
	}

	public void setAge(long age) {
		this.age = age;
	}
	
	

	
	
	
	
	//@Override
	//public String toString() {
		//return "{\"id\": \""+id+"\",\"title\":\""+title+"\",\"price\":"+price+", \"desc\":\""+desc+"\"}";
	}