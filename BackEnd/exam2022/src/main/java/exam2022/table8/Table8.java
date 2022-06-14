package exam2022.data3;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name="tablename1")
public class Table8 {
	@Id
	@GeneratedValue
	private int prkey;
	private String name11;
	private short weight;

	public Table8() {
	}

	public Table8(int prkey, String name11, short weight) {
		super();
		this.prkey = prkey;
		this.name11 = name11;
		this.weight = weight;
	}

	public int getPrkey() {
		return prkey;
	}

	public void setPrkey(int prkey) {
		this.prkey = prkey;
	}

	public String getName11() {
		return name11;
	}

	public void setName11(String name11) {
		this.name11 = name11;
	}

	public long getWeight() {
		return weight;
	}

	public void setWeight(short weight) {
		this.weight = weight;
	}







	//@Override
	//public String toString() {
		//return "{\"id\": \""+id+"\",\"title\":\""+title+"\",\"price\":"+price+", \"desc\":\""+desc+"\"}";
	}
