package server.services;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class TempService {
    private static Map<String, Double> temps = new HashMap<>();

    private Map<String, Double> createTemp(String type, Double temp) {

        Map<String, Double> t = new HashMap<>();
        t.put(type, Math.round(temp * 100.00) / 100.00);

        return t;
    }

    public Map<String, Double> tempToFar(Double tempC) {
        Double tempF = tempC * 9 / 5 + 32;

        return createTemp("far", tempF);
    }

    public Map<String, Double> FarToC(Double tempF) {
        Double tempC = tempF * 5 / 9 - 32;

        return createTemp("c", tempC);
    }

    public Map<String, Double> tempToKel(Double tempC) {
        Double tempK = tempC + 273.15;

        return createTemp("kel", tempK);
    }

    public Map<String, Double> kelToC(Double tempKel) {
        Double tempC = tempKel - 273.15;

        return createTemp("c", tempC);
    }

    public Map<String, Double> getAllTemps(Double tempC) {
        temps.put("currentTempC", tempC);

        temps.putAll(tempToFar(tempC));
        temps.putAll(tempToKel(tempC));
        temps.putAll(FarToC((tempToFar(tempC));

        return temps;
    }
}
