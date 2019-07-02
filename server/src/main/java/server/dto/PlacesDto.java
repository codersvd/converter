package server.dto;

import javax.persistence.*;

@Entity
@Table(name = "places")
public class PlacesDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "place_id")
    private Long placeId;

    @Column(name = "name")
    private String name;

    @Column(name = "status")
    private byte status;

    @Column(name = "userid")
    private int userid;

    public PlacesDto() {
    }

    public PlacesDto(String name, Byte status) {
        this.name = name;
        this.status = status;
    }

    public Long getPlaceId() {
        return placeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public int getUserid() {
        return userid;
    }

    @Override
    public String toString() {
        return "Place: " + this.placeId + ", " + this.name + ", " + this.status+","+this.userid;
    }

}
