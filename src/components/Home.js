import React from "react";

export const Home = () => {
  return (
    <div className="home">
      <div className="listItem">
        <div className="item">
          <h2>Manuale tecnico</h2>
          <p>
            Conversione in json delle regole sui campi del
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1GJw5mz1NomnGf3EewcDB4UMYYwBzXJWC/view?usp=sharing"
            >
              manuale tecnico
            </a>
            Redditi PF fornito da AgE.
            <br></br>
            L'obiettivo era quello di trasformare un pdf illeggibile in un
            formato comodo da manipolare per eventuali analisi future
          </p>
        </div>

        <div className="item">
          <h2>Quadro autogenerato</h2>
          <p>
            Dimostrazione di come sia possibile creare un layout che strutturi i
            campi della dichiarazione in modo automatico senza dover definire
            quanti campi mettere su ogni riga. Per farlo ho fatto in modo che
            ogni campo sia una riga e ogni colonna sia una frazione di quella
            riga.
            <br />
            In questo modo se ho LM22.1 LM22.2 LM22.3 il codice genra una riga
            (LM22) e la splitta in 3 colonne
            <br />
            Questo ci permette di avere una struttura abbastanza simile al
            modulo cartaceo senza dover definire un css ad hoc per ogni campo.
            ___
          </p>
        </div>

        <div className="item">
          <h2>Dipendenze dei campi (WIP)</h2>
          <div>
            In questa lista vengono mostratii campi della dichiarazione con un
            focus sulla complessità del singolo campo. La complessità si basa su
            una scala di 3 valori:
            <ul>
              <li>
                <strong>Easy</strong>: Un solo vincolo legato ad altri campi
              </li>
              <li>
                <strong>Strong</strong>: Due vincoli legati ad altri campi
              </li>
              <li>
                <strong>Strong</strong>: Varie dipendenze diverse
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
