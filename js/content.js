window.APP_CONTENT = {
  "blocks": {
    "fundamentals": {
      "number": "1",
      "title": "Comprendre ce que mesure le compte de résultat",
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "intro": [
        "Avant de calculer, justifiez ce qui appartient à la période. Les classements servent à expliquer les mécanismes ; l’activité de croisement applique ensuite ces mécanismes à de nouvelles situations."
      ],
      "takeaway": "Le résultat mesure une performance sur une période. Il ne mesure ni le patrimoine à une date ni le solde bancaire.",
      "deep": "Le rattachement à une période peut créer créances, dettes ou paiements d’avance. Le traitement détaillé dépend du référentiel ; retenez d’abord l’opération économique. Une facture seule ne prouve pas toujours une vente réalisée.",
      "synthesis": {
        "retain": "Le résultat mesure une performance sur une période. Il ne mesure ni le patrimoine à une date ni le solde bancaire.",
        "formulas": "Amortissement annuel linéaire = (coût de l’équipement - valeur résiduelle) / durée d’utilisation en années, pour une année complète de mise en service.",
        "errors": "Confondre vente et encaissement, charge et paiement, ou achat d’équipement et charge immédiate.",
        "skill": "Vous savez maintenant repérer le bon document et classer une opération sans confondre performance et trésorerie. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "Vous allez construire les niveaux d’exploitation."
      },
      "visualFormulas": [
        {
          "label": "Résultat de la période",
          "expression": "Produits - charges"
        }
      ],
      "name": "Fondamentaux",
      "form": "https://forms.gle/BNXy9rE6UzjqQf39A"
    },
    "operations": {
      "number": "2",
      "title": "Construire la performance de l’activité",
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "intro": [
        "Cas pédagogiques MobiliPro et Atelier Nova du catalogue pédagogique existant. L’exemple travaillé porte sur des montants différents. Nova demande une reconstruction sur brouillon avant la saisie ; MobiliPro demande aussi de renoncer à une marge non calculable."
      ],
      "takeaway": "Le coût des ventes n’est pas automatiquement les achats. Un sous-total exact repose d’abord sur le bon périmètre.",
      "deep": "Approfondir : dans l’industrie, le coût des ventes peut inclure des coûts de production et dépend des variations de produits finis. Sans ces données, annoncez la limite plutôt que de fabriquer une marge.",
      "synthesis": {
        "retain": "Le coût des ventes n’est pas automatiquement les achats. Un sous-total exact repose d’abord sur le bon périmètre.",
        "formulas": "Négoce simple : coût acheté-vendu = stock initial + achats - stock final. Le stock final est retranché car il reste à vendre. Marge brute = chiffre d’affaires - coût des ventes. Résultat opérationnel = marge brute - autres charges opérationnelles (dans ce cas simplifié). Rappel : marge brute = ventes - coût des ventes ; exploitation = marge brute - autres charges opérationnelles ; taux de marge brute = marge brute / ventes × 100. Résultat d’exploitation = produits d’exploitation - charges d’exploitation. Le détail manquant empêche de calculer une marge brute fiable.",
        "errors": "Utiliser les achats comme coût vendu ou retrancher deux fois une charge.",
        "skill": "Vous savez maintenant reconstruire la performance opérationnelle et signaler une donnée manquante. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "Vous allez intégrer finance, impôt et attribution."
      },
      "visualFormulas": [
        {
          "label": "Résultat d’exploitation",
          "expression": "Produits d’exploitation - charges d’exploitation"
        },
        {
          "label": "Coût acheté-vendu",
          "expression": "Stock initial + achats - stock final"
        }
      ],
      "name": "Exploitation",
      "form": "https://docs.google.com/forms/d/e/1FAIpQLSeVNgqP_ouwam2tBBYFXIinFH0DIl67hooFkqsI_0csK4DidA/viewform?usp=header"
    },
    "final-result": {
      "number": "3",
      "title": "Du résultat opérationnel au bénéfice",
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "intro": [
        "Maison Éclat provient du Guide final. Votre mission est moins guidée que Nova : sélectionnez les données, construisez le compte, puis expliquez une limite de décision. Tous les montants du dossier sont en k€, sauf le bénéfice par action en euros."
      ],
      "takeaway": "L’activité forme un niveau opérationnel ; finance et impôt conduisent au net. L’attribution, la distribution et le paiement restent trois questions différentes.",
      "deep": "Approfondir : le résultat attribuable et le nombre moyen pondéré d’actions doivent être cohérents. Actions dilutives et éléments non récurrents demandent une analyse séparée, non nécessaire au cas simplifié.",
      "synthesis": {
        "retain": "L’activité forme un niveau opérationnel ; finance et impôt conduisent au net. L’attribution, la distribution et le paiement restent trois questions différentes.",
        "formulas": "Avant impôt = exploitation + produits financiers - charges financières ; net = avant impôt - impôt, dans les cas simplifiés présentés. Rappel : exploitation = ventes - consommations - personnel - autres charges - dotations ; avant impôt = exploitation + résultat financier ; net = avant impôt - impôt. Bénéfice par action = résultat attribuable aux actionnaires / nombre d’actions pertinent. Le numérateur est un bénéfice, le dénominateur un nombre d’actions, le résultat s’exprime en euros par action.",
        "errors": "Confondre bénéfice par action, dividende et paiement.",
        "skill": "Vous savez maintenant expliquer le pont finance-impôt-net et la limite d’une décision de distribution. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "Vous allez comparer la performance en montants et en taux."
      },
      "visualFormulas": [
        {
          "label": "Résultat avant impôt (cas simplifié)",
          "expression": "Résultat d’exploitation + résultat financier"
        },
        {
          "label": "Résultat net (cas simplifié)",
          "expression": "Résultat avant impôt - impôt"
        }
      ],
      "workedCalculation": [
        {
          "label": "Résultat d’exploitation",
          "value": 50,
          "sign": "",
          "result": false
        },
        {
          "label": "Résultat financier",
          "value": -4,
          "sign": "+",
          "result": false
        },
        {
          "label": "Résultat avant impôt",
          "value": 46,
          "sign": "=",
          "result": true
        },
        {
          "label": "Impôt",
          "value": 12,
          "sign": "-",
          "result": false
        },
        {
          "label": "Résultat net",
          "value": 34,
          "sign": "=",
          "result": true
        }
      ],
      "name": "Résultat final",
      "form": "https://forms.gle/hG8Rw3rDQX8Kq4RR7"
    },
    "analysis": {
      "number": "4",
      "title": "Transformer une comparaison en enquête",
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "intro": [
        "Mydeco et Global : cas comparatifs pédagogiques adaptés du catalogue pédagogique, non données d’entreprises réelles. Calculez sur brouillon, nommez chaque taux et rédigez une note courte."
      ],
      "takeaway": "Une croissance des ventes peut accompagner une dégradation de rentabilité. Observation -> hypothèse -> information à vérifier.",
      "deep": "Approfondir : un effet prix, volume, mix ou change peut affecter ventes et marges différemment. Comparez à périmètre constant ; une corrélation ne démontre pas une causalité.",
      "synthesis": {
        "retain": "Une croissance des ventes peut accompagner une dégradation de rentabilité. Observation -> hypothèse -> information à vérifier.",
        "formulas": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100. Le chiffre d’affaires au dénominateur fixe une base de 100 € de ventes. Croissance d’un montant = (montant final - montant initial) / montant initial × 100 ; variation d’un taux en points = taux final - taux initial. Rappel : taux opérationnel = exploitation / ventes × 100 ; croissance = (final - initial) / initial × 100 ; différence de taux en points = taux final - taux initial. À base zéro, le taux de croissance n’est pas calculable par cette formule.",
        "errors": "Confondre points de pourcentage et variation relative ; présenter une hypothèse comme une preuve.",
        "skill": "Vous savez maintenant transformer une comparaison chiffrée en demande de vérification. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "Vous allez retrouver les soldes d’une grille française."
      },
      "name": "Analyse",
      "form": "https://forms.gle/zAzUJxZtXd4aSDVeA"
    },
    "sig": {
      "number": "5",
      "title": "Construire et interpréter la chaîne des SIG",
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "intro": [
        "Un même résultat de 10 M€ représente 20 % de ventes de 50 M€, mais 0,2 % de ventes de 5 000 M€. Un montant indique un volume. Un ratio permet une comparaison relative, à périmètre comparable.",
        "Commencez par les taux de marge et de marque. Les SIG (Soldes intermédiaires de gestion) servent ensuite à localiser l’origine de la performance : activité de négoce ou de production, richesse créée, exploitation, finance puis impôt.",
        "Suivez la chaîne colorée, les formules et le tableau professionnel. L’exemple Atelier Repère explique les passages. Reconstruisez ensuite Atelier Noma sur brouillon avec les données du support, sans ajouter d’opération exceptionnelle."
      ],
      "takeaway": "Les huit soldes répondent à des questions différentes. Le résultat financier se calcule séparément puis s’ajoute au résultat d’exploitation pour former le RCAI. Les formules simplifiées supposent l’absence des autres éléments indiqués dans le cas. Ni EBE ni résultat net ne prouvent le cash encaissé.",
      "deep": "Le PCG (Plan comptable général) fournit un cadre français. IFRS (International Financial Reporting Standards - normes internationales d’information financière) désigne le référentiel international. Une présentation par nature et une présentation par fonction n’ordonnent pas forcément les mêmes sous-totaux. Ne reconstruisez pas les SIG (Soldes intermédiaires de gestion) de LVMH (Louis Vuitton Moët Hennessy) par simple traduction.",
      "synthesis": {
        "retain": "Les huit soldes répondent à des questions différentes. Le résultat financier se calcule séparément puis s’ajoute au résultat d’exploitation pour former le RCAI. Les formules simplifiées supposent l’absence des autres éléments indiqués dans le cas. Ni EBE ni résultat net ne prouvent le cash encaissé.",
        "formulas": "Marge commerciale = ventes de marchandises - coût d’achat des marchandises vendues. Elle concerne l’achat-revente. Production de l’exercice = production vendue + production stockée + production immobilisée. Valeur ajoutée = marge commerciale + production de l’exercice - consommations de biens et services de tiers. EBE (Excédent brut d’exploitation) = valeur ajoutée + subventions d’exploitation - taxes d’exploitation - charges de personnel. Rappel dans Noma : exploitation = surplus brut - dotations - autres charges ; RCAI (Résultat courant avant impôts) = exploitation + produits financiers - charges financières ; net = résultat courant - impôt. Taux de marge du négoce = marge commerciale / coût acheté-vendu × 100 ; taux de marque = marge commerciale / ventes × 100. Le premier mesure la marge rapportée au coût, le second la part des ventes restant après ce coût.",
        "errors": "Assimiler automatiquement marge commerciale et marge brute, ou surplus brut et cash.",
        "skill": "Vous savez maintenant lire une cascade française sans fabriquer de faux équivalents internationaux. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "Vous allez transférer ces repères au document LVMH (Louis Vuitton Moët Hennessy)."
      },
      "learningFlow": [
        {
          "label": "Activité",
          "detail": "Négoce et / ou production",
          "tone": "activity"
        },
        {
          "label": "Marge commerciale / Production",
          "detail": "Deux premiers soldes selon l’activité",
          "tone": "margin"
        },
        {
          "label": "Valeur ajoutée",
          "detail": "Après les consommations externes",
          "tone": "va"
        },
        {
          "label": "EBE",
          "detail": "Après personnel et taxes d’exploitation",
          "tone": "ebe"
        },
        {
          "label": "Résultat d’exploitation",
          "detail": "Après usure, risques et autres charges du cas",
          "tone": "rex"
        },
        {
          "label": "Résultat financier",
          "detail": "Produits financiers - charges financières",
          "tone": "finance"
        },
        {
          "label": "RCAI",
          "detail": "Résultat d’exploitation + résultat financier",
          "tone": "rcai"
        },
        {
          "label": "Résultat net",
          "detail": "Dans nos cas : RCAI - impôt",
          "tone": "net"
        }
      ],
      "ratioPrimer": {
        "text": "En négoce, le taux de marge rapporte la marge commerciale au coût acheté-vendu. Le taux de marque la rapporte aux ventes. Exemple repère : ventes 160, coût 100, marge 60 ; taux de marge 60 %, taux de marque 37,5 %.",
        "formulas": [
          {
            "label": "Marge commerciale",
            "expression": "Ventes de marchandises - coût acheté-vendu"
          },
          {
            "label": "Taux de marge",
            "numerator": "Marge commerciale",
            "denominator": "Coût acheté-vendu",
            "multiplier": "× 100"
          },
          {
            "label": "Taux de marque",
            "numerator": "Marge commerciale",
            "denominator": "Ventes de marchandises",
            "multiplier": "× 100"
          }
        ]
      },
      "name": "SIG (Soldes intermédiaires de gestion)",
      "form": "https://forms.gle/qg8RzkFpFwoQRdSY6"
    },
    "real-case": {
      "number": "6",
      "title": "LVMH (Louis Vuitton Moët Hennessy) 2025 : de la donnée à la décision",
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "intro": [
        "Document officiel consolidé LVMH (Louis Vuitton Moët Hennessy) 2025, en M€ : lisez titre, exercice, unité et périmètre avant les lignes. Les charges sont signées négativement. Le sous-total avant impôt est reconstruit à des fins pédagogiques.",
        "Travaillez sur le tableau bilingue et l’extrait authentique : repérez les lignes, retrouvez les niveaux, qualifiez votre taux, puis rédigez. La note et la validation finale testent le raisonnement, pas une récitation."
      ],
      "takeaway": "Un chiffre n’est utile qu’avec sa source, son unité et son périmètre. La décision exige davantage qu’un calcul : elle exige une hypothèse testable.",
      "deep": "Approfondir : le document comporte aussi bilan, flux de trésorerie et notes. Pour tester une hypothèse sur le change, les stocks ou le cash, ces autres états deviennent indispensables.",
      "synthesis": {
        "retain": "Un chiffre n’est utile qu’avec sa source, son unité et son périmètre. La décision exige davantage qu’un calcul : elle exige une hypothèse testable.",
        "formulas": "Rappel : ventes + coût des ventes signé = marge brute ; marge brute + frais commerciaux signés + frais administratifs signés + résultat des coentreprises = résultat opérationnel courant dans ce document. Rappel : opérationnel courant + autres éléments opérationnels signés = opérationnel ; opérationnel + résultat financier net signé = avant impôt reconstruit. Rappel : avant impôt + impôts signés = net consolidé ; net consolidé - part des autres détenteurs = résultat net part du Groupe. Rappel : marge du niveau demandé = résultat de ce niveau / chiffre d’affaires × 100. Chaque taux dépend du numérateur choisi.",
        "errors": "Oublier signe, unité, périmètre consolidé ou attribution du bénéfice.",
        "skill": "Vous savez maintenant préparer une analyse prudente d’un document professionnel authentique. Cette compétence pourra notamment vous servir à préparer une analyse pour votre manager.",
        "next": "La prochaine séance expliquera le passage du résultat aux flux de trésorerie."
      },
      "name": "Cas réel - LVMH 2025",
      "form": "https://forms.gle/t9P21LZunZKenXnHA"
    }
  },
  "exercises": [
    {
      "id": "f-period",
      "block": "fundamentals",
      "title": "1. Se repérer avant de calculer",
      "type": "classification",
      "prompt": "Associez chaque question au document utile.",
      "items": [
        {
          "id": "i0",
          "label": "Que possède et doit l’entreprise au 31 décembre ?"
        },
        {
          "id": "i1",
          "label": "Quelle performance a-t-elle produite entre janvier et décembre ?"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Bilan : situation à une date"
        },
        {
          "id": "g1",
          "label": "Compte de résultat : activité sur une période"
        },
        {
          "id": "gx",
          "label": "Tableau des flux : mouvements d’argent de la période"
        },
        {
          "id": "gy",
          "label": "Analyse par les ratios : interprétation d’un rapport"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1"
      },
      "transfer": {
        "type": "single",
        "prompt": "Votre manager veut expliquer pourquoi le bénéfice de l’année ne correspond pas à la banque au 31 décembre. Quelle démarche répond à sa question ?",
        "options": [
          {
            "id": "o0",
            "label": "Rapprocher le compte de résultat des flux et du bilan",
            "confusion": "Raisonnement attendu : Le compte de résultat explique la performance ; les flux expliquent les mouvements de cash et le bilan les soldes. Leur rapprochement éclaire le décalage."
          },
          {
            "id": "o1",
            "label": "Lire seulement les disponibilités du bilan",
            "confusion": "Confusion ciblée : Lire seulement les disponibilités du bilan. À confronter à : Le compte de résultat explique la performance ; les flux expliquent les mouvements de cash et le bilan les soldes. Leur rapprochement éclaire le décalage."
          },
          {
            "id": "o2",
            "label": "Lire seulement les ventes du compte de résultat",
            "confusion": "Confusion ciblée : Lire seulement les ventes du compte de résultat. À confronter à : Le compte de résultat explique la performance ; les flux expliquent les mouvements de cash et le bilan les soldes. Leur rapprochement éclaire le décalage."
          },
          {
            "id": "o3",
            "label": "Comparer seulement les stocks des deux bilans",
            "confusion": "Confusion ciblée : Comparer seulement les stocks des deux bilans. À confronter à : Le compte de résultat explique la performance ; les flux expliquent les mouvements de cash et le bilan les soldes. Leur rapprochement éclaire le décalage."
          }
        ],
        "expected": "o0",
        "explanation": "Le compte de résultat explique la performance ; les flux expliquent les mouvements de cash et le bilan les soldes. Leur rapprochement éclaire le décalage.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_BALANCE_INCOME",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Cherchez-vous une situation ou un mouvement sur une période ?",
        "hint": "Le bilan est une photographie ; le compte de résultat raconte une période.",
        "explanation": "Le patrimoine se lit au bilan. Produits et charges de la période permettent de calculer son résultat."
      },
      "lesson": "À comprendre : quelle information faut-il chercher pour expliquer une performance ? Le bilan décrit ce que l’entreprise possède et doit à une date. Le compte de résultat rattache produits et charges à une période et explique un bénéfice ou une perte. Il ne décrit pas le solde bancaire. Commencez toujours par la question économique, la période et l’unité.",
      "example": "Une boutique détient 30 000 € de matériel le 31 décembre : information de bilan. Elle a réalisé 90 000 € de ventes pendant l’année : information de compte de résultat.",
      "successFeedback": "Le patrimoine se lit au bilan. Produits et charges de la période permettent de calculer son résultat.",
      "conceptCodes": [
        "CONF_BALANCE_INCOME"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 2.5,
      "itemFeedback": {
        "i0": {
          "hint": "Cherchez-vous une situation ou un mouvement sur une période ?",
          "confusion": "Le bilan est une photographie ; le compte de résultat raconte une période.",
          "explanation": "Que possède et doit l’entreprise au 31 décembre ? : Bilan : situation à une date. Le patrimoine se lit au bilan. Produits et charges de la période permettent de calculer son résultat."
        },
        "i1": {
          "hint": "Cherchez-vous une situation ou un mouvement sur une période ?",
          "confusion": "Le bilan est une photographie ; le compte de résultat raconte une période.",
          "explanation": "Quelle performance a-t-elle produite entre janvier et décembre ? : Compte de résultat : activité sur une période. Le patrimoine se lit au bilan. Produits et charges de la période permettent de calculer son résultat."
        }
      },
      "courseRef": "f-period-notion",
      "exampleRef": "f-period-exemple"
    },
    {
      "id": "f-credit",
      "block": "fundamentals",
      "title": "2. Vendre ne signifie pas toujours encaisser",
      "type": "classification",
      "prompt": "Une prestation de 2 400 € est exécutée en décembre, avec droit au paiement acquis, et payée en janvier. À quel moment constater chaque effet ?",
      "items": [
        {
          "id": "i0",
          "label": "Produit de la prestation"
        },
        {
          "id": "i1",
          "label": "Encaissement de 2 400 €"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Décembre"
        },
        {
          "id": "g1",
          "label": "Janvier"
        },
        {
          "id": "gx",
          "label": "Tableau des flux : mouvements d’argent de la période"
        },
        {
          "id": "gy",
          "label": "Analyse par les ratios : interprétation d’un rapport"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1"
      },
      "transfer": {
        "type": "single",
        "prompt": "Un client règle en février une créance née d’une prestation de décembre. Quel traitement évite de compter deux fois la performance ?",
        "options": [
          {
            "id": "o1",
            "label": "Augmenter la banque et constater un produit en février",
            "confusion": "Confusion ciblée : Augmenter la banque et constater un produit en février. À confronter à : La prestation a déjà créé le produit en décembre. Son règlement transforme une créance en banque : il ne crée pas une seconde prestation."
          },
          {
            "id": "o0",
            "label": "Augmenter la banque et réduire la créance sans nouveau produit",
            "confusion": "Raisonnement attendu : La prestation a déjà créé le produit en décembre. Son règlement transforme une créance en banque : il ne crée pas une seconde prestation."
          },
          {
            "id": "o2",
            "label": "Réduire la créance et constater une charge en février",
            "confusion": "Confusion ciblée : Réduire la créance et constater une charge en février. À confronter à : La prestation a déjà créé le produit en décembre. Son règlement transforme une créance en banque : il ne crée pas une seconde prestation."
          },
          {
            "id": "o3",
            "label": "Garder la créance et constater un produit en février",
            "confusion": "Confusion ciblée : Garder la créance et constater un produit en février. À confronter à : La prestation a déjà créé le produit en décembre. Son règlement transforme une créance en banque : il ne crée pas une seconde prestation."
          }
        ],
        "expected": "o0",
        "explanation": "La prestation a déjà créé le produit en décembre. Son règlement transforme une créance en banque : il ne crée pas une seconde prestation.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_PRODUCT_CASH",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel travail a été réalisé pendant la période ?",
        "hint": "Le règlement ne détermine pas la date du produit.",
        "explanation": "Le produit de 2 400 € appartient à décembre ; le paiement de janvier éteint une créance sans créer une seconde vente."
      },
      "lesson": "À comprendre : un produit traduit un élément de performance de la période. Un encaissement est une entrée de trésorerie. Vente réalisée ou prestation exécutée : produit et créance si le droit au paiement est acquis. Paiement ultérieur : la créance diminue et la trésorerie augmente, sans nouveau produit. Une facture seule ne suffit pas à créer un produit.",
      "example": "Prestation exécutée avec droit au paiement acquis : 1 000 €, dont 400 € encaissés. Produit : 1 000 € ; créance : 600 € ; entrée de trésorerie : 400 €. À l’encaissement ultérieur des 600 €, la créance s’éteint sans deuxième produit.",
      "successFeedback": "Le produit de 2 400 € appartient à décembre ; le paiement de janvier éteint une créance sans créer une seconde vente.",
      "conceptCodes": [
        "CONF_PRODUCT_CASH"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 4,
      "itemFeedback": {
        "i0": {
          "hint": "Quel travail a été réalisé pendant la période ?",
          "confusion": "Le règlement ne détermine pas la date du produit.",
          "explanation": "Produit de la prestation : Décembre. Le produit de 2 400 € appartient à décembre ; le paiement de janvier éteint une créance sans créer une seconde vente."
        },
        "i1": {
          "hint": "Quel travail a été réalisé pendant la période ?",
          "confusion": "Le règlement ne détermine pas la date du produit.",
          "explanation": "Encaissement de 2 400 € : Janvier. Le produit de 2 400 € appartient à décembre ; le paiement de janvier éteint une créance sans créer une seconde vente."
        }
      },
      "exampleFormulas": [
        {
          "label": "Créance restant à recevoir (exemple)",
          "expression": "1 000 - 400 = 600 €"
        }
      ],
      "courseRef": "f-credit-notion",
      "exampleRef": "f-credit-exemple"
    },
    {
      "id": "f-payment",
      "block": "fundamentals",
      "title": "3. Consommer ne signifie pas toujours payer",
      "type": "classification",
      "prompt": "Classez les effets de deux opérations.",
      "items": [
        {
          "id": "i0",
          "label": "Électricité consommée ce mois, facture non payée"
        },
        {
          "id": "i1",
          "label": "Paiement ce mois d’une facture déjà comptabilisée le mois dernier"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Charge du mois sans décaissement immédiat"
        },
        {
          "id": "g1",
          "label": "Décaissement du mois sans nouvelle charge"
        },
        {
          "id": "gx",
          "label": "Tableau des flux : mouvements d’argent de la période"
        },
        {
          "id": "gy",
          "label": "Analyse par les ratios : interprétation d’un rapport"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1"
      },
      "transfer": {
        "type": "single",
        "prompt": "L’assurance de janvier prochain est payée en décembre. Que faut-il regarder pour établir la charge de décembre ?",
        "options": [
          {
            "id": "o1",
            "label": "La date du virement au fournisseur",
            "confusion": "Confusion ciblée : La date du virement au fournisseur. À confronter à : Le rattachement suit la consommation de la période. Un paiement anticipé ne suffit pas à créer une charge de décembre."
          },
          {
            "id": "o2",
            "label": "Le montant disponible sur le compte",
            "confusion": "Confusion ciblée : Le montant disponible sur le compte. À confronter à : Le rattachement suit la consommation de la période. Un paiement anticipé ne suffit pas à créer une charge de décembre."
          },
          {
            "id": "o0",
            "label": "La période couverte par le contrat",
            "confusion": "Raisonnement attendu : Le rattachement suit la consommation de la période. Un paiement anticipé ne suffit pas à créer une charge de décembre."
          },
          {
            "id": "o3",
            "label": "La date d’émission de la facture",
            "confusion": "Confusion ciblée : La date d’émission de la facture. À confronter à : Le rattachement suit la consommation de la période. Un paiement anticipé ne suffit pas à créer une charge de décembre."
          }
        ],
        "expected": "o0",
        "explanation": "Le rattachement suit la consommation de la période. Un paiement anticipé ne suffit pas à créer une charge de décembre.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_CHARGE_PAYMENT",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Distinguez la date de consommation de la date du virement.",
        "hint": "Payer une dette déjà comptabilisée ne crée pas une deuxième charge.",
        "explanation": "Une charge représente une consommation ou une perte rattachée à la période. Le décaissement représente une sortie de trésorerie."
      },
      "lesson": "Un paiement peut solder une dette ancienne ou financer une consommation future. À l’inverse, une ressource consommée peut créer une charge avant son paiement. Ne reconstruisez jamais le résultat en additionnant seulement les mouvements bancaires.",
      "example": "Énergie consommée en décembre : 600 €, payés en janvier. Décembre porte la charge de 600 € ; janvier porte le décaissement de 600 €. Une facture ancienne payée aujourd’hui n’est pas une deuxième consommation.",
      "successFeedback": "Une charge représente une consommation ou une perte rattachée à la période. Le décaissement représente une sortie de trésorerie.",
      "conceptCodes": [
        "CONF_CHARGE_PAYMENT"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Distinguez la date de consommation de la date du virement.",
          "confusion": "Payer une dette déjà comptabilisée ne crée pas une deuxième charge.",
          "explanation": "Électricité consommée ce mois, facture non payée : Charge du mois sans décaissement immédiat. Une charge représente une consommation ou une perte rattachée à la période. Le décaissement représente une sortie de trésorerie."
        },
        "i1": {
          "hint": "Distinguez la date de consommation de la date du virement.",
          "confusion": "Payer une dette déjà comptabilisée ne crée pas une deuxième charge.",
          "explanation": "Paiement ce mois d’une facture déjà comptabilisée le mois dernier : Décaissement du mois sans nouvelle charge. Une charge représente une consommation ou une perte rattachée à la période. Le décaissement représente une sortie de trésorerie."
        }
      },
      "courseRef": "f-payment-notion",
      "exampleRef": "f-payment-exemple"
    },
    {
      "id": "f-capex",
      "block": "fundamentals",
      "title": "4. Investissement et amortissement",
      "type": "number",
      "prompt": "Une machine de 24 000 € est disponible dès le premier jour de l’année, utilisée 4 ans, sans valeur résiduelle. Amortissement linéaire annuel, en euros ?",
      "expected": 6000,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Machine disponible toute l’année, 20 000 €, valeur résiduelle 2 000 €, durée 3 ans. Le comptable propose 6 666,67 € de dotation. Quel diagnostic est exact ?",
        "options": [
          {
            "id": "o1",
            "label": "La base amortissable est 20 000 € ; la dotation est 6 666,67 €",
            "confusion": "Confusion ciblée : La base amortissable est 20 000 € ; la dotation est 6 666,67 €. À confronter à : La base est le coût moins la valeur résiduelle : (20 000 - 2 000) / 3 = 6 000 € par année complète. Le montant à répartir n’est pas toujours le prix total."
          },
          {
            "id": "o2",
            "label": "La base amortissable est 22 000 € ; la dotation est 7 333,33 €",
            "confusion": "Confusion ciblée : La base amortissable est 22 000 € ; la dotation est 7 333,33 €. À confronter à : La base est le coût moins la valeur résiduelle : (20 000 - 2 000) / 3 = 6 000 € par année complète. Le montant à répartir n’est pas toujours le prix total."
          },
          {
            "id": "o3",
            "label": "La base amortissable est 2 000 € ; la dotation est 666,67 €",
            "confusion": "Confusion ciblée : La base amortissable est 2 000 € ; la dotation est 666,67 €. À confronter à : La base est le coût moins la valeur résiduelle : (20 000 - 2 000) / 3 = 6 000 € par année complète. Le montant à répartir n’est pas toujours le prix total."
          },
          {
            "id": "o0",
            "label": "La base amortissable est 18 000 € ; la dotation est 6 000 €",
            "confusion": "Raisonnement attendu : La base est le coût moins la valeur résiduelle : (20 000 - 2 000) / 3 = 6 000 € par année complète. Le montant à répartir n’est pas toujours le prix total."
          }
        ],
        "expected": "o0",
        "explanation": "La base est le coût moins la valeur résiduelle : (20 000 - 2 000) / 3 = 6 000 € par année complète. Le montant à répartir n’est pas toujours le prix total.",
        "skill": "Amortissement annuel linéaire = (coût de l’équipement - valeur résiduelle) / durée d’utilisation en années, pour une année complète de mise en service.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_CAPEX_EXPENSE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "La machine est-elle entièrement consommée le jour de son achat ?",
        "hint": "Répartissez le coût amortissable sur les quatre années d’utilisation.",
        "explanation": "24 000 / 4 = 6 000 € par an. L’achat crée une immobilisation ; l’amortissement est la charge répartissant son coût sur sa durée d’utilisation."
      },
      "lesson": "Acheter une ressource utilisée plusieurs années est un investissement, pas nécessairement une charge intégrale immédiate. L’amortissement traduit sa consommation progressive. Son calcul suppose notamment une durée, une base et une date de mise en service.",
      "example": "Un ordinateur de 3 000 €, disponible trois années complètes, sans valeur résiduelle : 1 000 € d’amortissement annuel. L’achat payé fait sortir 3 000 € de trésorerie ; la dotation annuelle ne déclenche pas un nouveau paiement.",
      "successFeedback": "24 000 / 4 = 6 000 € par an. L’achat crée une immobilisation ; l’amortissement est la charge répartissant son coût sur sa durée d’utilisation.",
      "conceptCodes": [
        "CONF_CAPEX_EXPENSE"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "calculation": {
        "expression": "24000/4",
        "unit": "€",
        "rounding": null
      },
      "estimatedMinutes": 4,
      "formula": "Amortissement annuel linéaire = (coût de l’équipement - valeur résiduelle) / durée d’utilisation en années, pour une année complète de mise en service.",
      "visualFormulas": [
        {
          "label": "Amortissement annuel linéaire",
          "numerator": "Coût d’acquisition - valeur résiduelle",
          "denominator": "Durée d’utilisation (années)"
        }
      ],
      "exampleFormulas": [
        {
          "label": "Dotation annuelle (exemple)",
          "numerator": "3 000 €",
          "denominator": "3 années",
          "multiplier": "= 1 000 € par an"
        }
      ],
      "courseRef": "f-capex-notion",
      "exampleRef": "f-capex-exemple"
    },
    {
      "id": "f-depreciation",
      "block": "fundamentals",
      "title": "5. Amortissement : que consomme-t-on ?",
      "type": "classification",
      "prompt": "Une machine a été achetée et payée l’an dernier. Une dotation de 2 000 € est comptabilisée cette année. Classez les effets de cette dotation.",
      "items": [
        {
          "id": "i0",
          "label": "Charge de 2 000 € dans la période"
        },
        {
          "id": "i1",
          "label": "Nouveau paiement obligatoire de 2 000 €"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Effet comptable attendu"
        },
        {
          "id": "g1",
          "label": "Effet non démontré par la dotation"
        },
        {
          "id": "gx",
          "label": "Tableau des flux : mouvements d’argent de la période"
        },
        {
          "id": "gy",
          "label": "Analyse par les ratios : interprétation d’un rapport"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1"
      },
      "transfer": {
        "type": "single",
        "prompt": "Le manager supprime un virement imaginaire de 3 000 € associé à la dotation d’une machine déjà payée. Quel effet cette correction a-t-elle ?",
        "options": [
          {
            "id": "o0",
            "label": "Le cash prévu est corrigé ; la charge d’amortissement demeure",
            "confusion": "Raisonnement attendu : L’erreur portait sur un paiement fictif, pas sur la consommation comptable de la machine. La dotation reste une charge réelle de période."
          },
          {
            "id": "o1",
            "label": "Le cash prévu est corrigé ; la charge d’amortissement disparaît",
            "confusion": "Confusion ciblée : Le cash prévu est corrigé ; la charge d’amortissement disparaît. À confronter à : L’erreur portait sur un paiement fictif, pas sur la consommation comptable de la machine. La dotation reste une charge réelle de période."
          },
          {
            "id": "o2",
            "label": "Le résultat augmente ; la banque reste identique",
            "confusion": "Confusion ciblée : Le résultat augmente ; la banque reste identique. À confronter à : L’erreur portait sur un paiement fictif, pas sur la consommation comptable de la machine. La dotation reste une charge réelle de période."
          },
          {
            "id": "o3",
            "label": "Le résultat et la banque augmentent de 3 000 €",
            "confusion": "Confusion ciblée : Le résultat et la banque augmentent de 3 000 €. À confronter à : L’erreur portait sur un paiement fictif, pas sur la consommation comptable de la machine. La dotation reste une charge réelle de période."
          }
        ],
        "expected": "o0",
        "explanation": "L’erreur portait sur un paiement fictif, pas sur la consommation comptable de la machine. La dotation reste une charge réelle de période.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_DEPRECIATION_CASH",
      "conceptCodes": [
        "CONF_DEPRECIATION_CASH"
      ],
      "lesson": "À comprendre : l’usure d’un équipement est-elle payée une deuxième fois chaque année ? Non. L’amortissement répartit le coût amortissable sur l’utilisation attendue. C’est une charge de période ; ce n’est pas un virement annuel. Ne confondez pas une charge sans paiement simultané avec une charge imaginaire.",
      "example": "Matériel payé 9 000 € avant l’année étudiée, utilisé trois années complètes sans valeur résiduelle : dotation annuelle 3 000 €. Son paiement et sa consommation comptable ont des calendriers différents.",
      "successFeedback": "La dotation réduit le résultat sans imposer un nouveau décaissement. Le paiement de l’investissement a eu lieu l’an dernier.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel événement correspond à une consommation et lequel correspond à un virement ?",
        "hint": "L’achat est déjà payé ; cherchez seulement l’effet de la consommation comptable cette année.",
        "explanation": "La dotation réduit le résultat sans imposer un nouveau décaissement. Le paiement de l’investissement a eu lieu l’an dernier."
      },
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Quel événement correspond à une consommation et lequel correspond à un virement ?",
          "confusion": "L’achat est déjà payé ; cherchez seulement l’effet de la consommation comptable cette année.",
          "explanation": "Charge de 2 000 € dans la période : Effet comptable attendu. La dotation réduit le résultat sans imposer un nouveau décaissement. Le paiement de l’investissement a eu lieu l’an dernier."
        },
        "i1": {
          "hint": "Quel événement correspond à une consommation et lequel correspond à un virement ?",
          "confusion": "L’achat est déjà payé ; cherchez seulement l’effet de la consommation comptable cette année.",
          "explanation": "Nouveau paiement obligatoire de 2 000 € : Effet non démontré par la dotation. La dotation réduit le résultat sans imposer un nouveau décaissement. Le paiement de l’investissement a eu lieu l’an dernier."
        }
      },
      "courseRef": "f-depreciation-notion",
      "exampleRef": "f-depreciation-exemple"
    },
    {
      "id": "f-cross",
      "block": "fundamentals",
      "title": "6. Croiser performance et trésorerie",
      "type": "classification",
      "prompt": "Pour chaque opération isolée, identifiez son effet immédiat.",
      "items": [
        {
          "id": "i0",
          "label": "Vente réalisée à crédit : 1 000 €"
        },
        {
          "id": "i1",
          "label": "Emprunt reçu : 5 000 €"
        },
        {
          "id": "i2",
          "label": "Dotation annuelle d’amortissement : 600 €"
        },
        {
          "id": "i3",
          "label": "Loyer du mois consommé et payé : 400 €"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Résultat seulement"
        },
        {
          "id": "g1",
          "label": "Trésorerie seulement"
        },
        {
          "id": "g2",
          "label": "Résultat et trésorerie"
        },
        {
          "id": "gx",
          "label": "Tableau des flux : mouvements d’argent de la période"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g0",
        "i3": "g2"
      },
      "transfer": {
        "type": "single",
        "prompt": "Une société rembourse 10 000 € de capital et 400 € d’intérêts. Quelle lecture sépare correctement résultat et trésorerie ?",
        "options": [
          {
            "id": "o1",
            "label": "10 400 € sortent ; les 10 400 € sont une charge",
            "confusion": "Confusion ciblée : 10 400 € sortent ; les 10 400 € sont une charge. À confronter à : Le capital remboursé diminue une dette. Les intérêts sont le coût du financement. Le décaissement total est 10 000 + 400 = 10 400 €."
          },
          {
            "id": "o0",
            "label": "10 400 € sortent ; seuls les 400 € d’intérêts sont une charge",
            "confusion": "Raisonnement attendu : Le capital remboursé diminue une dette. Les intérêts sont le coût du financement. Le décaissement total est 10 000 + 400 = 10 400 €."
          },
          {
            "id": "o2",
            "label": "400 € sortent ; les 10 000 € sont une charge",
            "confusion": "Confusion ciblée : 400 € sortent ; les 10 000 € sont une charge. À confronter à : Le capital remboursé diminue une dette. Les intérêts sont le coût du financement. Le décaissement total est 10 000 + 400 = 10 400 €."
          },
          {
            "id": "o3",
            "label": "10 000 € sortent ; les 400 € sont un produit",
            "confusion": "Confusion ciblée : 10 000 € sortent ; les 400 € sont un produit. À confronter à : Le capital remboursé diminue une dette. Les intérêts sont le coût du financement. Le décaissement total est 10 000 + 400 = 10 400 €."
          }
        ],
        "expected": "o0",
        "explanation": "Le capital remboursé diminue une dette. Les intérêts sont le coût du financement. Le décaissement total est 10 000 + 400 = 10 400 €.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_NET_CASH",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "L’entrée d’argent rémunère-t-elle une vente ou crée-t-elle une dette ?",
        "hint": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
        "explanation": "Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux."
      },
      "lesson": "Manipulation autonome : tracez sur brouillon trois colonnes : performance de la période, entrée/sortie de trésorerie, poste de bilan concerné. Pour chaque opération, justifiez la différence avant de classer. Transférez ensuite à un règlement de créance et à un service payé : aucune nouvelle règle ne sera nécessaire.",
      "example": "Exemple : emprunt reçu 5 000 € = dette et entrée de banque, sans produit. Loyer du mois consommé et payé 500 € = charge et sortie de banque. Le compte de résultat et la banque répondent à deux questions différentes.",
      "successFeedback": "Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux.",
      "conceptCodes": [
        "CONF_NET_CASH"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 4,
      "itemFeedback": {
        "i0": {
          "hint": "L’entrée d’argent rémunère-t-elle une vente ou crée-t-elle une dette ?",
          "confusion": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
          "explanation": "Vente réalisée à crédit : 1 000 € : Résultat seulement. Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux."
        },
        "i1": {
          "hint": "L’entrée d’argent rémunère-t-elle une vente ou crée-t-elle une dette ?",
          "confusion": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
          "explanation": "Emprunt reçu : 5 000 € : Trésorerie seulement. Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux."
        },
        "i2": {
          "hint": "L’entrée d’argent rémunère-t-elle une vente ou crée-t-elle une dette ?",
          "confusion": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
          "explanation": "Dotation annuelle d’amortissement : 600 € : Résultat seulement. Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux."
        },
        "i3": {
          "hint": "L’entrée d’argent rémunère-t-elle une vente ou crée-t-elle une dette ?",
          "confusion": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
          "explanation": "Loyer du mois consommé et payé : 400 € : Résultat et trésorerie. Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux."
        }
      },
      "courseRef": "f-cross-notion",
      "exampleRef": "f-cross-exemple"
    },
    {
      "id": "f-revenue",
      "block": "fundamentals",
      "title": "7. Le chiffre d’affaires n’est pas tous les produits",
      "type": "multiple",
      "prompt": "Quelles opérations appartiennent au chiffre d’affaires d’un fabricant de meubles ?",
      "options": [
        {
          "id": "o0",
          "label": "Ventes de meubles de son activité habituelle",
          "confusion": "Raisonnement attendu : Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers."
        },
        {
          "id": "o1",
          "label": "Intérêts reçus sur un placement",
          "confusion": "Confusion ciblée : Intérêts reçus sur un placement. À confronter à : Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers."
        },
        {
          "id": "o2",
          "label": "Emprunt bancaire reçu",
          "confusion": "Confusion ciblée : Emprunt bancaire reçu. À confronter à : Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers."
        },
        {
          "id": "o3",
          "label": "Prestations habituelles de montage facturées",
          "confusion": "Raisonnement attendu : Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers."
        }
      ],
      "expected": [
        "o0",
        "o3"
      ],
      "transfer": {
        "type": "single",
        "prompt": "Pour un fabricant, ventes de meubles 50, montage habituel 5, intérêts de placement 1, emprunt 20 (k€). Quel rapprochement est juste ?",
        "options": [
          {
            "id": "o1",
            "label": "Chiffre d’affaires 56 ; produits 56 dans ce cas",
            "confusion": "Confusion ciblée : Chiffre d’affaires 56 ; produits 56 dans ce cas. À confronter à : 50 + 5 = 55 de ventes ordinaires ; le produit financier ajoute 1 aux produits. L’emprunt de 20 crée une dette et ne constitue pas un produit."
          },
          {
            "id": "o2",
            "label": "Chiffre d’affaires 75 ; produits 76 dans ce cas",
            "confusion": "Confusion ciblée : Chiffre d’affaires 75 ; produits 76 dans ce cas. À confronter à : 50 + 5 = 55 de ventes ordinaires ; le produit financier ajoute 1 aux produits. L’emprunt de 20 crée une dette et ne constitue pas un produit."
          },
          {
            "id": "o0",
            "label": "Chiffre d’affaires 55 ; produits 56 dans ce cas",
            "confusion": "Raisonnement attendu : 50 + 5 = 55 de ventes ordinaires ; le produit financier ajoute 1 aux produits. L’emprunt de 20 crée une dette et ne constitue pas un produit."
          },
          {
            "id": "o3",
            "label": "Chiffre d’affaires 50 ; produits 55 dans ce cas",
            "confusion": "Confusion ciblée : Chiffre d’affaires 50 ; produits 55 dans ce cas. À confronter à : 50 + 5 = 55 de ventes ordinaires ; le produit financier ajoute 1 aux produits. L’emprunt de 20 crée une dette et ne constitue pas un produit."
          }
        ],
        "expected": "o0",
        "explanation": "50 + 5 = 55 de ventes ordinaires ; le produit financier ajoute 1 aux produits. L’emprunt de 20 crée une dette et ne constitue pas un produit.",
        "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_PRODUCT_CASH",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Qu’est-ce qui rémunère l’activité habituelle vendue aux clients ?",
        "hint": "Un produit financier peut être un produit sans être du chiffre d’affaires.",
        "explanation": "Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers."
      },
      "lesson": "À retenir : produits moins charges donne le résultat de la période. Chiffre d’affaires, total des produits et encaissements ne sont pas interchangeables. Vous pourrez maintenant reconstruire plusieurs niveaux de résultat.",
      "example": "Un fabricant vend un meuble 800 € et reçoit un emprunt de 5 000 €. Le chiffre d’affaires de cette opération est 800 €, même si les deux mouvements peuvent faire entrer de l’argent. Un produit financier n’est pas automatiquement une vente de l’activité habituelle.",
      "successFeedback": "Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers.",
      "conceptCodes": [
        "CONF_PRODUCT_CASH"
      ],
      "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "estimatedMinutes": 3.5,
      "skill": "Distinguer performance de période, patrimoine, paiements et investissement.",
      "difficulty": "application",
      "courseRef": "f-revenue-notion",
      "exampleRef": "f-revenue-exemple"
    },
    {
      "id": "o-revenue",
      "block": "operations",
      "title": "1. D’où vient le revenu de l’activité ?",
      "type": "classification",
      "prompt": "MobiliPro fabrique des meubles. Classez ces montants avant tout calcul.",
      "items": [
        {
          "id": "i0",
          "label": "Vente réalisée, droit au paiement acquis : 12 000 €, encaissés plus tard"
        },
        {
          "id": "i1",
          "label": "Emprunt bancaire reçu : 25 000 €"
        },
        {
          "id": "i2",
          "label": "Règlement reçu d’une créance ancienne : 3 000 €"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Chiffre d’affaires de la période"
        },
        {
          "id": "g1",
          "label": "Financement, pas un produit"
        },
        {
          "id": "g2",
          "label": "Encaissement sans nouvelle vente"
        },
        {
          "id": "gx",
          "label": "Décision d’affectation du bénéfice, après son calcul"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2"
      },
      "transfer": {
        "type": "single",
        "prompt": "Une vente est réalisée en N et réglée en N+1. Le commercial veut rattacher le chiffre d’affaires à N+1. Quel événement doit guider la période ?",
        "options": [
          {
            "id": "o1",
            "label": "L’arrivée des fonds sur le compte de banque",
            "confusion": "Confusion ciblée : L’arrivée des fonds sur le compte de banque. À confronter à : Le chiffre d’affaires traduit la vente réalisée ; le règlement ultérieur éteint la créance. Les deux événements ont des calendriers distincts."
          },
          {
            "id": "o2",
            "label": "La date prévue du remboursement de l’emprunt",
            "confusion": "Confusion ciblée : La date prévue du remboursement de l’emprunt. À confronter à : Le chiffre d’affaires traduit la vente réalisée ; le règlement ultérieur éteint la créance. Les deux événements ont des calendriers distincts."
          },
          {
            "id": "o3",
            "label": "La date de consultation du relevé bancaire",
            "confusion": "Confusion ciblée : La date de consultation du relevé bancaire. À confronter à : Le chiffre d’affaires traduit la vente réalisée ; le règlement ultérieur éteint la créance. Les deux événements ont des calendriers distincts."
          },
          {
            "id": "o0",
            "label": "La réalisation de la vente avec droit au paiement acquis",
            "confusion": "Raisonnement attendu : Le chiffre d’affaires traduit la vente réalisée ; le règlement ultérieur éteint la créance. Les deux événements ont des calendriers distincts."
          }
        ],
        "expected": "o0",
        "explanation": "Le chiffre d’affaires traduit la vente réalisée ; le règlement ultérieur éteint la créance. Les deux événements ont des calendriers distincts.",
        "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_DEBT_REVENUE",
      "conceptCodes": [
        "CONF_DEBT_REVENUE"
      ],
      "lesson": "À comprendre : que vend-on réellement pendant la période ? Revenue signifie chiffre d’affaires. Un emprunt augmente la dette et la trésorerie ; il ne rémunère pas une vente. Un règlement ancien éteint une créance. Avant de construire un résultat, identifiez les opérations de l’activité et leur rattachement.",
      "example": "Une vente réalisée de 10 000 € payée à 30 jours est du chiffre d’affaires aujourd’hui. Recevoir 30 000 € de la banque aujourd’hui est un financement. Aucun des deux montants ne permet seul de connaître le résultat.",
      "successFeedback": "Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle contrepartie l’entreprise a-t-elle fournie : un bien, un service, ou une promesse de rembourser ?",
        "hint": "Séparez la réalisation de la vente et l’origine du virement reçu.",
        "explanation": "Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente."
      },
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Quelle contrepartie l’entreprise a-t-elle fournie : un bien, un service, ou une promesse de rembourser ?",
          "confusion": "Séparez la réalisation de la vente et l’origine du virement reçu.",
          "explanation": "Vente réalisée, droit au paiement acquis : 12 000 €, encaissés plus tard : Chiffre d’affaires de la période. Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente."
        },
        "i1": {
          "hint": "Quelle contrepartie l’entreprise a-t-elle fournie : un bien, un service, ou une promesse de rembourser ?",
          "confusion": "Séparez la réalisation de la vente et l’origine du virement reçu.",
          "explanation": "Emprunt bancaire reçu : 25 000 € : Financement, pas un produit. Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente."
        },
        "i2": {
          "hint": "Quelle contrepartie l’entreprise a-t-elle fournie : un bien, un service, ou une promesse de rembourser ?",
          "confusion": "Séparez la réalisation de la vente et l’origine du virement reçu.",
          "explanation": "Règlement reçu d’une créance ancienne : 3 000 € : Encaissement sans nouvelle vente. Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente."
        }
      },
      "courseRef": "o-revenue-notion",
      "exampleRef": "o-revenue-exemple"
    },
    {
      "id": "o-stock",
      "block": "operations",
      "title": "2. Achats et coût des ventes",
      "type": "number",
      "prompt": "Cas simplifié d’achat-revente : stock initial 20 k€, achats 100 k€, stock final 30 k€. Coût des marchandises vendues, en k€ ?",
      "expected": 90,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "À achats constants et stock initial inchangé, le stock final de marchandises augmente de 15 k€. Quel effet sur le coût acheté-vendu, dans le négoce simple ?",
        "options": [
          {
            "id": "o0",
            "label": "Il diminue de 15 k€",
            "confusion": "Raisonnement attendu : Coût acheté-vendu = stock initial + achats - stock final. Une hausse de 15 du terme retranché réduit le coût vendu de 15, toutes choses égales par ailleurs."
          },
          {
            "id": "o1",
            "label": "Il augmente de 15 k€",
            "confusion": "Confusion ciblée : Il augmente de 15 k€. À confronter à : Coût acheté-vendu = stock initial + achats - stock final. Une hausse de 15 du terme retranché réduit le coût vendu de 15, toutes choses égales par ailleurs."
          },
          {
            "id": "o2",
            "label": "Il reste identique",
            "confusion": "Confusion ciblée : Il reste identique. À confronter à : Coût acheté-vendu = stock initial + achats - stock final. Une hausse de 15 du terme retranché réduit le coût vendu de 15, toutes choses égales par ailleurs."
          },
          {
            "id": "o3",
            "label": "Il diminue de 30 k€",
            "confusion": "Confusion ciblée : Il diminue de 30 k€. À confronter à : Coût acheté-vendu = stock initial + achats - stock final. Une hausse de 15 du terme retranché réduit le coût vendu de 15, toutes choses égales par ailleurs."
          }
        ],
        "expected": "o0",
        "explanation": "Coût acheté-vendu = stock initial + achats - stock final. Une hausse de 15 du terme retranché réduit le coût vendu de 15, toutes choses égales par ailleurs.",
        "skill": "Négoce simple : coût acheté-vendu = stock initial + achats - stock final. Le stock final est retranché car il reste à vendre.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_PURCHASE_COGS",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Toute la marchandise achetée a-t-elle été vendue ?",
        "hint": "Coût vendu = stock initial + achats - stock final, dans ce cas simplifié.",
        "explanation": "20 + 100 - 30 = 90 k€. Les 30 k€ encore en stock ne sont pas tous un coût des ventes de la période."
      },
      "lesson": "Les achats décrivent des acquisitions de la période ; le coût des ventes décrit le coût de ce qui a effectivement été vendu. Production, stocks et périmètre de coûts rendent le rapprochement plus complexe dans une entreprise industrielle. Ne transposez pas mécaniquement la formule du négoce à tous les cas.",
      "example": "Négoce simple, sans autres coûts : stock au début 10, achats 60, stock à la fin 15. Coût acheté-vendu = 10 + 60 - 15 = 55. Les biens encore en stock ne sont pas tous consommés par les ventes. Pour une industrie, la composition des coûts doit être précisée.",
      "successFeedback": "20 + 100 - 30 = 90 k€. Les 30 k€ encore en stock ne sont pas tous un coût des ventes de la période.",
      "conceptCodes": [
        "CONF_PURCHASE_COGS"
      ],
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "calculation": {
        "expression": "20+100-30",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 4,
      "formula": "Négoce simple : coût acheté-vendu = stock initial + achats - stock final. Le stock final est retranché car il reste à vendre.",
      "exampleFormulas": [
        {
          "label": "Coût acheté-vendu (exemple)",
          "expression": "10 + 60 - 15 = 55"
        }
      ],
      "courseRef": "o-stock-notion",
      "exampleRef": "o-stock-exemple"
    },
    {
      "id": "o-gross",
      "block": "operations",
      "title": "3. Construire la marge brute",
      "type": "number",
      "prompt": "Atelier Nova vend pour 240 k€. Le coût des produits effectivement vendus est 144 k€. Marge brute, en k€ ?",
      "expected": 96,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Ventes 200, coût vendu 120, autres charges opérationnelles 50 (k€). Un analyste annonce une marge brute de 30. Quelle correction proposez-vous ?",
        "options": [
          {
            "id": "o1",
            "label": "Marge brute 30 ; exploitation 80",
            "confusion": "Confusion ciblée : Marge brute 30 ; exploitation 80. À confronter à : 200 - 120 = 80 de marge brute, puis 80 - 50 = 30 d’exploitation. L’erreur confond deux niveaux successifs."
          },
          {
            "id": "o0",
            "label": "Marge brute 80 ; exploitation 30",
            "confusion": "Raisonnement attendu : 200 - 120 = 80 de marge brute, puis 80 - 50 = 30 d’exploitation. L’erreur confond deux niveaux successifs."
          },
          {
            "id": "o2",
            "label": "Marge brute 80 ; exploitation 80",
            "confusion": "Confusion ciblée : Marge brute 80 ; exploitation 80. À confronter à : 200 - 120 = 80 de marge brute, puis 80 - 50 = 30 d’exploitation. L’erreur confond deux niveaux successifs."
          },
          {
            "id": "o3",
            "label": "Marge brute 30 ; exploitation -20",
            "confusion": "Confusion ciblée : Marge brute 30 ; exploitation -20. À confronter à : 200 - 120 = 80 de marge brute, puis 80 - 50 = 30 d’exploitation. L’erreur confond deux niveaux successifs."
          }
        ],
        "expected": "o0",
        "explanation": "200 - 120 = 80 de marge brute, puis 80 - 50 = 30 d’exploitation. L’erreur confond deux niveaux successifs.",
        "skill": "Marge brute = chiffre d’affaires - coût des ventes. Résultat opérationnel = marge brute - autres charges opérationnelles (dans ce cas simplifié).",
        "difficulty": "transfert"
      },
      "errorCode": "CALC_GROSS_MARGIN",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle ressource les ventes ont-elles effectivement consommée ?",
        "hint": "Marge brute = chiffre d’affaires - coût des ventes.",
        "explanation": "240 - 144 = 96 k€. Il reste cette marge avant les autres charges opérationnelles."
      },
      "lesson": "À comprendre : que reste-t-il des ventes après le coût associé à ce qui a été vendu ? Gross margin signifie marge brute dans la présentation étudiée. Le coût des ventes vient d’abord ; les autres charges opérationnelles viennent ensuite. Ce sous-total n’est ni un résultat net ni, par identité automatique, la marge commerciale des SIG (Soldes intermédiaires de gestion).",
      "example": "Ventes 100, coût des ventes 65 : marge brute 35. Autres charges opérationnelles 25 : résultat d’exploitation 10. Ce 10 n’est ni la marge brute ni la trésorerie.",
      "successFeedback": "240 - 144 = 96 k€. Il reste cette marge avant les autres charges opérationnelles.",
      "conceptCodes": [
        "CALC_GROSS_MARGIN"
      ],
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "calculation": {
        "expression": "240-144",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 4,
      "formula": "Marge brute = chiffre d’affaires - coût des ventes. Résultat opérationnel = marge brute - autres charges opérationnelles (dans ce cas simplifié).",
      "exampleFormulas": [
        {
          "label": "Marge brute (exemple)",
          "expression": "100 - 65 = 35"
        },
        {
          "label": "Exploitation (exemple)",
          "expression": "35 - 25 = 10"
        }
      ],
      "courseRef": "o-gross-notion",
      "exampleRef": "o-gross-exemple"
    },
    {
      "id": "o-costmap",
      "block": "operations",
      "title": "4. À quel étage placer chaque coût ?",
      "type": "classification",
      "prompt": "Dans une présentation par fonction, classez ces postes. Les charges sont données positives et seront soustraites une seule fois.",
      "items": [
        {
          "id": "i0",
          "label": "Coût de fabrication déjà inclus dans le coût des produits vendus"
        },
        {
          "id": "i1",
          "label": "Personnel de vente et d’administration non inclus dans le coût des ventes"
        },
        {
          "id": "i2",
          "label": "Intérêts de la dette"
        },
        {
          "id": "i3",
          "label": "Impôt sur le bénéfice"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Coût des ventes"
        },
        {
          "id": "g1",
          "label": "Autres charges opérationnelles"
        },
        {
          "id": "g2",
          "label": "Finance"
        },
        {
          "id": "g3",
          "label": "Impôt"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2",
        "i3": "g3"
      },
      "transfer": {
        "type": "single",
        "prompt": "Un tableau retranche un coût vendu de 100 incluant 25 de salaires, puis retranche à nouveau ces salaires. Quel correctif faut-il apporter ?",
        "options": [
          {
            "id": "o1",
            "label": "Retrancher encore 25 au résultat calculé",
            "confusion": "Confusion ciblée : Retrancher encore 25 au résultat calculé. À confronter à : Les salaires ont été soustraits deux fois : corriger le doublon relève le résultat de 25. Ils restent compris une fois dans le coût vendu."
          },
          {
            "id": "o2",
            "label": "Réintégrer 100 au résultat calculé",
            "confusion": "Confusion ciblée : Réintégrer 100 au résultat calculé. À confronter à : Les salaires ont été soustraits deux fois : corriger le doublon relève le résultat de 25. Ils restent compris une fois dans le coût vendu."
          },
          {
            "id": "o0",
            "label": "Réintégrer 25 au résultat calculé",
            "confusion": "Raisonnement attendu : Les salaires ont été soustraits deux fois : corriger le doublon relève le résultat de 25. Ils restent compris une fois dans le coût vendu."
          },
          {
            "id": "o3",
            "label": "Modifier seulement le chiffre d’affaires de 25",
            "confusion": "Confusion ciblée : Modifier seulement le chiffre d’affaires de 25. À confronter à : Les salaires ont été soustraits deux fois : corriger le doublon relève le résultat de 25. Ils restent compris une fois dans le coût vendu."
          }
        ],
        "expected": "o0",
        "explanation": "Les salaires ont été soustraits deux fois : corriger le doublon relève le résultat de 25. Ils restent compris une fois dans le coût vendu.",
        "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_OPERATING_EBIT",
      "conceptCodes": [
        "CONF_OPERATING_EBIT"
      ],
      "lesson": "À comprendre : une charge apparaît-elle déjà dans un sous-total ? Une présentation par fonction regroupe par exemple les coûts vendus, commerciaux et administratifs. On ne retranche pas une deuxième fois un salaire déjà compris dans le coût des ventes. Le niveau opérationnel précède les effets financiers et l’impôt.",
      "example": "Ventes 100 ; coût des ventes 65, dont salaires de production 20 ; autres frais opérationnels 25. Marge brute 35 ; résultat opérationnel 10. Retirer encore les salaires de 20 compterait deux fois la même charge.",
      "successFeedback": "Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Ce montant est-il déjà compris dans une autre ligne ?",
        "hint": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
        "explanation": "Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite."
      },
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Ce montant est-il déjà compris dans une autre ligne ?",
          "confusion": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
          "explanation": "Coût de fabrication déjà inclus dans le coût des produits vendus : Coût des ventes. Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite."
        },
        "i1": {
          "hint": "Ce montant est-il déjà compris dans une autre ligne ?",
          "confusion": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
          "explanation": "Personnel de vente et d’administration non inclus dans le coût des ventes : Autres charges opérationnelles. Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite."
        },
        "i2": {
          "hint": "Ce montant est-il déjà compris dans une autre ligne ?",
          "confusion": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
          "explanation": "Intérêts de la dette : Finance. Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite."
        },
        "i3": {
          "hint": "Ce montant est-il déjà compris dans une autre ligne ?",
          "confusion": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
          "explanation": "Impôt sur le bénéfice : Impôt. Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite."
        }
      },
      "courseRef": "o-costmap-notion",
      "exampleRef": "o-costmap-exemple"
    },
    {
      "id": "o-nova",
      "block": "operations",
      "title": "5. Atelier Nova : reconstruire un document complet",
      "type": "assessment",
      "prompt": "Atelier Nova, en k€ : ventes réalisées 240 ; coût des produits vendus 144 ; personnel commercial et administratif 38 ; loyers et services 22 ; amortissements opérationnels non inclus dans les autres coûts 6. Sans copier l’exemple, construisez trois niveaux sur papier puis complétez.",
      "questions": [
        {
          "type": "number",
          "prompt": "Chiffre d’affaires de la période, en k€ ?",
          "expected": 240,
          "tolerance": 0,
          "calculation": {
            "expression": "240",
            "unit": "k€",
            "rounding": null
          },
          "id": "q0",
          "title": "Chiffre d’affaires"
        },
        {
          "type": "number",
          "prompt": "Marge brute, en k€ ?",
          "expected": 96,
          "tolerance": 0,
          "calculation": {
            "expression": "240-144",
            "unit": "k€",
            "rounding": null
          },
          "id": "q1",
          "title": "Marge brute"
        },
        {
          "type": "number",
          "prompt": "Résultat opérationnel, en k€ ?",
          "expected": 30,
          "tolerance": 0,
          "calculation": {
            "expression": "240-144-38-22-6",
            "unit": "k€",
            "rounding": null
          },
          "id": "q2",
          "title": "Résultat opérationnel"
        }
      ],
      "threshold": 3,
      "transfer": {
        "type": "single",
        "prompt": "Un coût vendu de 120 inclut déjà 15 d’amortissements. Les autres charges distinctes valent 50, les ventes 200 (k€). Quel résultat peut-on établir ?",
        "options": [
          {
            "id": "o1",
            "label": "Exploitation 15 ; net encore inconnu",
            "confusion": "Confusion ciblée : Exploitation 15 ; net encore inconnu. À confronter à : 200 - 120 - 50 = 30. Les 15 sont déjà inclus dans 120, donc aucun second retrait. Finance et impôt sont absents : le net est inconnu."
          },
          {
            "id": "o2",
            "label": "Exploitation 80 ; net égal à 80",
            "confusion": "Confusion ciblée : Exploitation 80 ; net égal à 80. À confronter à : 200 - 120 - 50 = 30. Les 15 sont déjà inclus dans 120, donc aucun second retrait. Finance et impôt sont absents : le net est inconnu."
          },
          {
            "id": "o3",
            "label": "Exploitation 45 ; net égal à 45",
            "confusion": "Confusion ciblée : Exploitation 45 ; net égal à 45. À confronter à : 200 - 120 - 50 = 30. Les 15 sont déjà inclus dans 120, donc aucun second retrait. Finance et impôt sont absents : le net est inconnu."
          },
          {
            "id": "o0",
            "label": "Exploitation 30 ; net encore inconnu",
            "confusion": "Raisonnement attendu : 200 - 120 - 50 = 30. Les 15 sont déjà inclus dans 120, donc aucun second retrait. Finance et impôt sont absents : le net est inconnu."
          }
        ],
        "expected": "o0",
        "explanation": "200 - 120 - 50 = 30. Les 15 sont déjà inclus dans 120, donc aucun second retrait. Finance et impôt sont absents : le net est inconnu.",
        "skill": "Rappel : marge brute = ventes - coût des ventes ; exploitation = marge brute - autres charges opérationnelles ; taux de marge brute = marge brute / ventes × 100.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_GROSS_NET",
      "conceptCodes": [
        "CONF_GROSS_NET"
      ],
      "lesson": "Manipulation autonome : partez des données et créez vous-même les lignes, sans formule ligne par ligne. Sur brouillon, nommez les deux sous-totaux et indiquez pourquoi vous ne pouvez pas encore annoncer un résultat net. Les données de ce cas ne contiennent ni résultat financier ni impôt.",
      "example": "Cas travaillé différent : ventes 150, coût vendu 90, autres charges opérationnelles 45. Marge brute 60 ; exploitation 15. Le résultat net reste inconnu tant que finance et impôt manquent.",
      "successFeedback": "Nova : chiffre d’affaires 240 ; marge brute 96 ; exploitation 30 k€. Le coût des ventes et les autres charges sont distincts. Le résultat net ne peut pas être déduit sans les autres étages.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel sous-total apparaît avant les frais de vente et d’administration ?",
        "hint": "Reconstruisez ventes moins coût vendu, puis retranchez uniquement les autres charges opérationnelles.",
        "explanation": "Nova : chiffre d’affaires 240 ; marge brute 96 ; exploitation 30 k€. Le coût des ventes et les autres charges sont distincts. Le résultat net ne peut pas être déduit sans les autres étages."
      },
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "estimatedMinutes": 7,
      "formula": "Rappel : marge brute = ventes - coût des ventes ; exploitation = marge brute - autres charges opérationnelles ; taux de marge brute = marge brute / ventes × 100.",
      "exampleFormulas": [
        {
          "label": "Marge brute (exemple)",
          "expression": "150 - 90 = 60"
        },
        {
          "label": "Exploitation (exemple)",
          "expression": "60 - 45 = 15"
        }
      ],
      "courseRef": "o-nova-notion",
      "exampleRef": "o-nova-exemple"
    },
    {
      "id": "o-mobilipro",
      "block": "operations",
      "title": "6. MobiliPro : utiliser seulement les données disponibles",
      "type": "number",
      "prompt": "MobiliPro : produits d’exploitation 651 500 €, charges d’exploitation 538 300 €. Résultat d’exploitation, en euros ?",
      "expected": 113200,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Une exploitation positive de 40 k€ coexiste avec des charges financières nettes de 50 k€. Sans autre élément, quel résultat avant impôt reconstruisez-vous ?",
        "options": [
          {
            "id": "o0",
            "label": "-10 k€ malgré l’exploitation positive",
            "confusion": "Raisonnement attendu : 40 - 50 = -10 k€. Un résultat d’exploitation positif ne garantit pas un résultat final positif : les étages financiers et fiscaux comptent."
          },
          {
            "id": "o1",
            "label": "40 k€ car la finance est indépendante",
            "confusion": "Confusion ciblée : 40 k€ car la finance est indépendante. À confronter à : 40 - 50 = -10 k€. Un résultat d’exploitation positif ne garantit pas un résultat final positif : les étages financiers et fiscaux comptent."
          },
          {
            "id": "o2",
            "label": "90 k€ en ajoutant les charges financières",
            "confusion": "Confusion ciblée : 90 k€ en ajoutant les charges financières. À confronter à : 40 - 50 = -10 k€. Un résultat d’exploitation positif ne garantit pas un résultat final positif : les étages financiers et fiscaux comptent."
          },
          {
            "id": "o3",
            "label": "-50 k€ en ignorant l’exploitation",
            "confusion": "Confusion ciblée : -50 k€ en ignorant l’exploitation. À confronter à : 40 - 50 = -10 k€. Un résultat d’exploitation positif ne garantit pas un résultat final positif : les étages financiers et fiscaux comptent."
          }
        ],
        "expected": "o0",
        "explanation": "40 - 50 = -10 k€. Un résultat d’exploitation positif ne garantit pas un résultat final positif : les étages financiers et fiscaux comptent.",
        "skill": "Résultat d’exploitation = produits d’exploitation - charges d’exploitation. Le détail manquant empêche de calculer une marge brute fiable.",
        "difficulty": "transfert"
      },
      "errorCode": "CALC_RESULT",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel total de produits et quel total de charges ont le même périmètre ?",
        "hint": "Soustrayez les charges d’exploitation des produits d’exploitation.",
        "explanation": "651 500 - 538 300 = 113 200 €. Ce résultat positif décrit la performance d’exploitation, sans établir le cash disponible."
      },
      "lesson": "MobiliPro, cas pédagogique du catalogue pédagogique : vous disposez seulement de totaux d’exploitation. Calculez ce qu’ils permettent réellement, puis préparez une demande d’information au contrôleur de gestion. Notez la période, le périmètre et l’unité. Un total de charges ne fournit pas automatiquement un coût des ventes fiable.",
      "example": "Exemple distinct, en k€ : ventes 150, coût vendu 90, autres charges 45. Marge brute = 150 - 90 = 60 ; exploitation = 60 - 45 = 15. Les frais inclus dans le coût vendu ne sont pas retirés deux fois.",
      "successFeedback": "651 500 - 538 300 = 113 200 €. Ce résultat positif décrit la performance d’exploitation, sans établir le cash disponible.",
      "conceptCodes": [
        "CALC_RESULT"
      ],
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "calculation": {
        "expression": "651500-538300",
        "unit": "€",
        "rounding": null
      },
      "estimatedMinutes": 4,
      "formula": "Résultat d’exploitation = produits d’exploitation - charges d’exploitation. Le détail manquant empêche de calculer une marge brute fiable.",
      "courseRef": "o-mobilipro-notion",
      "exampleRef": "o-mobilipro-exemple"
    },
    {
      "id": "o-mobili-limit",
      "block": "operations",
      "title": "7. Identifier une information manquante",
      "type": "multiple",
      "prompt": "Avec les seuls totaux MobiliPro, quelles affirmations sont justifiées ?",
      "options": [
        {
          "id": "o0",
          "label": "Le résultat d’exploitation est positif",
          "confusion": "Raisonnement attendu : Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes."
        },
        {
          "id": "o1",
          "label": "La marge brute est nécessairement 113 200 €",
          "confusion": "Confusion ciblée : La marge brute est nécessairement 113 200 €. À confronter à : Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes."
        },
        {
          "id": "o2",
          "label": "Les achats de matières égalent nécessairement le coût des ventes",
          "confusion": "Confusion ciblée : Les achats de matières égalent nécessairement le coût des ventes. À confronter à : Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes."
        },
        {
          "id": "o3",
          "label": "Il manque le coût des ventes pour isoler une marge brute",
          "confusion": "Raisonnement attendu : Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes."
        }
      ],
      "expected": [
        "o0",
        "o3"
      ],
      "transfer": {
        "type": "single",
        "prompt": "Un industriel fournit ses achats de matières et ses ventes. Quelle demande rendrait une marge brute plus fiable ?",
        "options": [
          {
            "id": "o1",
            "label": "Le montant encaissé auprès des clients pendant l’année",
            "confusion": "Confusion ciblée : Le montant encaissé auprès des clients pendant l’année. À confronter à : Les achats ne décrivent pas seuls les consommations des ventes. Stocks, production et coûts inclus sont nécessaires pour éviter un calcul sur un périmètre erroné."
          },
          {
            "id": "o0",
            "label": "Le coût des produits vendus, son périmètre et les stocks pertinents",
            "confusion": "Raisonnement attendu : Les achats ne décrivent pas seuls les consommations des ventes. Stocks, production et coûts inclus sont nécessaires pour éviter un calcul sur un périmètre erroné."
          },
          {
            "id": "o2",
            "label": "Le montant du nouvel emprunt bancaire de l’année",
            "confusion": "Confusion ciblée : Le montant du nouvel emprunt bancaire de l’année. À confronter à : Les achats ne décrivent pas seuls les consommations des ventes. Stocks, production et coûts inclus sont nécessaires pour éviter un calcul sur un périmètre erroné."
          },
          {
            "id": "o3",
            "label": "Le montant de l’impôt payé pendant l’année",
            "confusion": "Confusion ciblée : Le montant de l’impôt payé pendant l’année. À confronter à : Les achats ne décrivent pas seuls les consommations des ventes. Stocks, production et coûts inclus sont nécessaires pour éviter un calcul sur un périmètre erroné."
          }
        ],
        "expected": "o0",
        "explanation": "Les achats ne décrivent pas seuls les consommations des ventes. Stocks, production et coûts inclus sont nécessaires pour éviter un calcul sur un périmètre erroné.",
        "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_PURCHASE_COGS",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel sous-total pouvez-vous réellement reconstruire ?",
        "hint": "Ne confondez pas résultat d’exploitation et marge brute.",
        "explanation": "Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes."
      },
      "lesson": "Analyse : formulez oralement une demande de données au contrôleur de gestion. Précisez le poste recherché, la période, le périmètre et l’unité. Une bonne question d’information vaut mieux qu’un calcul exact sur un mauvais périmètre.",
      "example": "Une société ne fournit que ventes 500 et charges opérationnelles 450. L’exploitation vaut 50. Sans détail de ce qui est vendu et de son coût, on ne peut pas isoler sa marge brute.",
      "successFeedback": "Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes.",
      "conceptCodes": [
        "CONF_PURCHASE_COGS"
      ],
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "estimatedMinutes": 3,
      "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "difficulty": "application",
      "courseRef": "o-mobili-limit-notion",
      "exampleRef": "o-mobili-limit-exemple"
    },
    {
      "id": "o-checkpoint",
      "block": "operations",
      "title": "8. Checkpoint 1 : diagnostic intégré",
      "type": "assessment",
      "prompt": "Diagnostic intégré : répondez aux neuf questions, puis utilisez les retours par question pour choisir les notions à retravailler. Aucun score ne limite votre navigation.",
      "questions": [
        {
          "id": "q0",
          "title": "Document",
          "type": "single",
          "prompt": "Quel document mesure l’activité sur une période ?",
          "options": [
            {
              "id": "o1",
              "label": "Bilan de clôture",
              "confusion": "Confusion ciblée : Bilan de clôture. À confronter à : Le compte de résultat rapproche les produits et charges sur une période ; le bilan décrit une situation à une date."
            },
            {
              "id": "o2",
              "label": "Relevé bancaire",
              "confusion": "Confusion ciblée : Relevé bancaire. À confronter à : Le compte de résultat rapproche les produits et charges sur une période ; le bilan décrit une situation à une date."
            },
            {
              "id": "o0",
              "label": "Compte de résultat",
              "confusion": "Raisonnement attendu : Le compte de résultat rapproche les produits et charges sur une période ; le bilan décrit une situation à une date."
            },
            {
              "id": "o3",
              "label": "Échéancier des dettes",
              "confusion": "Confusion ciblée : Échéancier des dettes. À confronter à : Le compte de résultat rapproche les produits et charges sur une période ; le bilan décrit une situation à une date."
            }
          ],
          "expected": "o0",
          "explanation": "Le compte de résultat rapproche les produits et charges sur une période ; le bilan décrit une situation à une date.",
          "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
          "difficulty": "application",
          "courseRef": "f-period-notion",
          "courseBlock": "fundamentals"
        },
        {
          "id": "q1",
          "title": "Vente à crédit",
          "type": "number",
          "prompt": "Vente réalisée 2 000 €, encaissée 500 €. Produit en euros ?",
          "expected": 2000,
          "tolerance": 0,
          "calculation": {
            "expression": "2000",
            "unit": "€",
            "rounding": null
          },
          "explanation": "La vente réalisée crée un produit de 2 000 € ; les 500 € encaissés décrivent seulement le paiement partiel. Le solde est une créance.",
          "courseRef": "f-credit-notion",
          "courseBlock": "fundamentals"
        },
        {
          "id": "q2",
          "title": "Emprunt",
          "type": "single",
          "prompt": "Quel effet décrit un emprunt bancaire reçu ?",
          "options": [
            {
              "id": "o1",
              "label": "Produit financier et trésorerie augmentés",
              "confusion": "Confusion ciblée : Produit financier et trésorerie augmentés. À confronter à : Le prêt crée une dette et une entrée de trésorerie. Il ne rémunère aucune vente : aucun produit n’est créé."
            },
            {
              "id": "o2",
              "label": "Chiffre d’affaires et trésorerie augmentés",
              "confusion": "Confusion ciblée : Chiffre d’affaires et trésorerie augmentés. À confronter à : Le prêt crée une dette et une entrée de trésorerie. Il ne rémunère aucune vente : aucun produit n’est créé."
            },
            {
              "id": "o3",
              "label": "Capitaux propres et résultat augmentés",
              "confusion": "Confusion ciblée : Capitaux propres et résultat augmentés. À confronter à : Le prêt crée une dette et une entrée de trésorerie. Il ne rémunère aucune vente : aucun produit n’est créé."
            },
            {
              "id": "o0",
              "label": "Dette et trésorerie augmentées, sans produit",
              "confusion": "Raisonnement attendu : Le prêt crée une dette et une entrée de trésorerie. Il ne rémunère aucune vente : aucun produit n’est créé."
            }
          ],
          "expected": "o0",
          "explanation": "Le prêt crée une dette et une entrée de trésorerie. Il ne rémunère aucune vente : aucun produit n’est créé.",
          "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
          "difficulty": "application",
          "courseRef": "f-cross-notion",
          "courseBlock": "fundamentals"
        },
        {
          "id": "q3",
          "title": "Amortissement",
          "type": "number",
          "prompt": "Équipement 12 000 €, 4 années complètes, valeur résiduelle nulle. Dotation annuelle en euros ?",
          "expected": 3000,
          "tolerance": 0,
          "calculation": {
            "expression": "12000/4",
            "unit": "€",
            "rounding": null
          },
          "explanation": "Le coût est réparti sur les quatre années complètes d’usage ; la dotation de période n’est pas un nouveau paiement.",
          "courseRef": "f-capex-notion",
          "courseBlock": "fundamentals"
        },
        {
          "id": "q4",
          "title": "Marge brute",
          "type": "number",
          "prompt": "Ventes 100, coût des ventes 60. Marge brute ?",
          "expected": 40,
          "tolerance": 0,
          "calculation": {
            "expression": "100-60",
            "unit": "k€",
            "rounding": null
          },
          "explanation": "Le coût des biens vendus est déduit des ventes pour isoler ce qui reste avant les autres charges opérationnelles.",
          "courseRef": "o-gross-notion",
          "courseBlock": "operations"
        },
        {
          "id": "q5",
          "title": "Coût vendu",
          "type": "number",
          "prompt": "Stock initial 10, achats 50, stock final 15. Coût vendu ?",
          "expected": 45,
          "tolerance": 0,
          "calculation": {
            "expression": "10+50-15",
            "unit": "k€",
            "rounding": null
          },
          "explanation": "On ajoute le stock initial et les achats, puis on retranche les biens encore en stock à la fin de la période.",
          "courseRef": "o-stock-notion",
          "courseBlock": "operations"
        },
        {
          "id": "q6",
          "title": "Charge opérationnelle",
          "type": "single",
          "prompt": "Quel poste est une charge opérationnelle de la période ?",
          "options": [
            {
              "id": "o0",
              "label": "Salaire de la période",
              "confusion": "Raisonnement attendu : La consommation de la période appartient à l’exploitation ; un financement reçu et une distribution ne sont pas des consommations de l’activité."
            },
            {
              "id": "o1",
              "label": "Remboursement du capital d’un emprunt",
              "confusion": "Confusion ciblée : Remboursement du capital d’un emprunt. À confronter à : La consommation de la période appartient à l’exploitation ; un financement reçu et une distribution ne sont pas des consommations de l’activité."
            },
            {
              "id": "o2",
              "label": "Prix total d’une machine utilisée cinq ans",
              "confusion": "Confusion ciblée : Prix total d’une machine utilisée cinq ans. À confronter à : La consommation de la période appartient à l’exploitation ; un financement reçu et une distribution ne sont pas des consommations de l’activité."
            },
            {
              "id": "o3",
              "label": "Dividende décidé sur le bénéfice passé",
              "confusion": "Confusion ciblée : Dividende décidé sur le bénéfice passé. À confronter à : La consommation de la période appartient à l’exploitation ; un financement reçu et une distribution ne sont pas des consommations de l’activité."
            }
          ],
          "expected": "o0",
          "explanation": "La consommation de la période appartient à l’exploitation ; un financement reçu et une distribution ne sont pas des consommations de l’activité.",
          "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
          "difficulty": "application",
          "courseRef": "o-costmap-notion",
          "courseBlock": "operations"
        },
        {
          "id": "q7",
          "title": "Exploitation",
          "type": "number",
          "prompt": "Marge brute 70, autres charges opérationnelles 45. Résultat d’exploitation ?",
          "expected": 25,
          "tolerance": 0,
          "calculation": {
            "expression": "70-45",
            "unit": "k€",
            "rounding": null
          },
          "explanation": "Les charges opérationnelles restant après le coût vendu sont déduites de la marge brute, sans être comptées deux fois.",
          "courseRef": "o-nova-notion",
          "courseBlock": "operations"
        },
        {
          "id": "q8",
          "title": "Prudence",
          "type": "single",
          "prompt": "Un bénéfice positif est constaté. Comment vérifier la capacité à payer ?",
          "options": [
            {
              "id": "o1",
              "label": "Déduire la banque disponible du résultat positif",
              "confusion": "Confusion ciblée : Déduire la banque disponible du résultat positif. À confronter à : Le bénéfice et les mouvements bancaires n’ont pas le même calendrier ; une créance ou un investissement peut modifier la trésorerie sans annuler le résultat."
            },
            {
              "id": "o0",
              "label": "Examiner disponibilités et échéances avant de conclure",
              "confusion": "Raisonnement attendu : Le bénéfice et les mouvements bancaires n’ont pas le même calendrier ; une créance ou un investissement peut modifier la trésorerie sans annuler le résultat."
            },
            {
              "id": "o2",
              "label": "Ajouter les créances au bénéfice pour estimer le cash",
              "confusion": "Confusion ciblée : Ajouter les créances au bénéfice pour estimer le cash. À confronter à : Le bénéfice et les mouvements bancaires n’ont pas le même calendrier ; une créance ou un investissement peut modifier la trésorerie sans annuler le résultat."
            },
            {
              "id": "o3",
              "label": "Ignorer les investissements dans la capacité à payer",
              "confusion": "Confusion ciblée : Ignorer les investissements dans la capacité à payer. À confronter à : Le bénéfice et les mouvements bancaires n’ont pas le même calendrier ; une créance ou un investissement peut modifier la trésorerie sans annuler le résultat."
            }
          ],
          "expected": "o0",
          "explanation": "Le bénéfice et les mouvements bancaires n’ont pas le même calendrier ; une créance ou un investissement peut modifier la trésorerie sans annuler le résultat.",
          "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
          "difficulty": "application",
          "courseRef": "f-cross-notion",
          "courseBlock": "fundamentals"
        }
      ],
      "threshold": 7,
      "transfer": {
        "type": "single",
        "prompt": "Dossier à contrôler : une vente à crédit est exclue, un emprunt est ajouté aux ventes et un salaire déjà inclus dans le coût vendu est déduit à nouveau. Quelle méthode corrige ces erreurs ?",
        "options": [
          {
            "id": "o1",
            "label": "Conserver uniquement les paiements enregistrés en banque",
            "confusion": "Confusion ciblée : Conserver uniquement les paiements enregistrés en banque. À confronter à : Commencer par la nature économique : vente reconnue = produit ; prêt = dette ; une même charge ne doit être déduite qu’une fois. Le contrôle de périmètre précède le calcul."
          },
          {
            "id": "o2",
            "label": "Ajouter la créance et l’emprunt aux produits de la période",
            "confusion": "Confusion ciblée : Ajouter la créance et l’emprunt aux produits de la période. À confronter à : Commencer par la nature économique : vente reconnue = produit ; prêt = dette ; une même charge ne doit être déduite qu’une fois. Le contrôle de périmètre précède le calcul."
          },
          {
            "id": "o0",
            "label": "Reclasser les opérations puis vérifier les coûts comptés une seule fois",
            "confusion": "Raisonnement attendu : Commencer par la nature économique : vente reconnue = produit ; prêt = dette ; une même charge ne doit être déduite qu’une fois. Le contrôle de périmètre précède le calcul."
          },
          {
            "id": "o3",
            "label": "Retirer tous les salaires du coût vendu et du résultat",
            "confusion": "Confusion ciblée : Retirer tous les salaires du coût vendu et du résultat. À confronter à : Commencer par la nature économique : vente reconnue = produit ; prêt = dette ; une même charge ne doit être déduite qu’une fois. Le contrôle de périmètre précède le calcul."
          }
        ],
        "expected": "o0",
        "explanation": "Commencer par la nature économique : vente reconnue = produit ; prêt = dette ; une même charge ne doit être déduite qu’une fois. Le contrôle de périmètre précède le calcul.",
        "skill": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "difficulty": "transfert"
      },
      "errorCode": "CHECKPOINT_CORE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Repérez les thèmes non maîtrisés indiqués par le diagnostic. Corrigez votre raisonnement, pas seulement votre réponse.",
        "hint": "Reprenez les distinctions performance/cash, coût vendu/achats et les deux sous-totaux. Pour 0-4, reprenez les exemples puis utilisez le mini-check différent.",
        "explanation": "Le diagnostic distingue les neuf compétences. Les explications des activités précédentes servent de consolidation. Après ouverture de cette explication, le mini-check différent devient obligatoire."
      },
      "lesson": "Checkpoint de raisonnement : avant la saisie, justifiez une fois chaque famille de réponses sur brouillon. Le diagnostic signale les thèmes à reprendre, sans donner toutes les solutions après la première erreur. Les résultats orientent les révisions sans limiter la navigation.",
      "example": "Exemple distinct, en k€ : ventes 150, coût vendu 90, autres charges 45. Marge brute = 150 - 90 = 60 ; exploitation = 60 - 45 = 15. Les frais inclus dans le coût vendu ne sont pas retirés deux fois.",
      "successFeedback": "Checkpoint franchi : utilisez le diagnostic par thème pour expliquer une erreur éventuelle avant de poursuivre.",
      "consolidationBelow": 5,
      "conceptCodes": [
        "CHECKPOINT_CORE"
      ],
      "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
      "estimatedMinutes": 8,
      "courseRef": "o-checkpoint-notion",
      "exampleRef": "o-checkpoint-exemple"
    },
    {
      "id": "r-finance-boundary",
      "block": "final-result",
      "title": "1. Identifier le périmètre du résultat",
      "type": "classification",
      "prompt": "Classez les postes.",
      "items": [
        {
          "id": "i0",
          "label": "Salaires opérationnels"
        },
        {
          "id": "i1",
          "label": "Intérêts d’emprunt"
        },
        {
          "id": "i2",
          "label": "Impôt sur les bénéfices"
        },
        {
          "id": "i3",
          "label": "Emprunt reçu"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Exploitation"
        },
        {
          "id": "g1",
          "label": "Finance"
        },
        {
          "id": "g2",
          "label": "Impôt"
        },
        {
          "id": "g3",
          "label": "Hors compte de résultat"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2",
        "i3": "g3"
      },
      "transfer": {
        "type": "single",
        "prompt": "Le remboursement bancaire comprend 8 de capital et 2 d’intérêts (k€). Quel montant intervient dans le résultat financier ?",
        "options": [
          {
            "id": "o1",
            "label": "Une charge financière de 10",
            "confusion": "Confusion ciblée : Une charge financière de 10. À confronter à : Le coût du financement est l’intérêt de 2. Le capital de 8 rembourse une dette ; il ne diminue pas le résultat."
          },
          {
            "id": "o2",
            "label": "Un produit financier de 8",
            "confusion": "Confusion ciblée : Un produit financier de 8. À confronter à : Le coût du financement est l’intérêt de 2. Le capital de 8 rembourse une dette ; il ne diminue pas le résultat."
          },
          {
            "id": "o3",
            "label": "Une charge d’exploitation de 8",
            "confusion": "Confusion ciblée : Une charge d’exploitation de 8. À confronter à : Le coût du financement est l’intérêt de 2. Le capital de 8 rembourse une dette ; il ne diminue pas le résultat."
          },
          {
            "id": "o0",
            "label": "Une charge financière de 2",
            "confusion": "Raisonnement attendu : Le coût du financement est l’intérêt de 2. Le capital de 8 rembourse une dette ; il ne diminue pas le résultat."
          }
        ],
        "expected": "o0",
        "explanation": "Le coût du financement est l’intérêt de 2. Le capital de 8 rembourse une dette ; il ne diminue pas le résultat.",
        "skill": "Avant impôt = exploitation + produits financiers - charges financières ; net = avant impôt - impôt, dans les cas simplifiés présentés.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_FINANCE_OPERATING",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle fonction économique explique chaque poste ?",
        "hint": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
        "explanation": "Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan."
      },
      "lesson": "À comprendre : que gagne l’activité avant le coût de son financement et l’impôt ? EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) désigne ce niveau selon le périmètre retenu. Dans notre cas simple, il coïncide avec l’exploitation. Ajoutez ensuite produits financiers et charges financières pour l’avant impôt ; soustrayez l’impôt pour le net. N’imposez pas cette identité de périmètre à tout document publié. Dans nos cas, aucun résultat exceptionnel ni participation n’est donné. La formule avant impôt est donc simplifiée ; un dossier complet peut comporter d’autres rubriques.",
      "example": "Exploitation 50 ; résultat financier -4 ; impôt 12 : résultat avant impôt 46, résultat net 34. Un remboursement de capital ne s’ajoute pas aux charges financières.",
      "successFeedback": "Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan.",
      "conceptCodes": [
        "CONF_FINANCE_OPERATING"
      ],
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "estimatedMinutes": 3,
      "formula": "Avant impôt = exploitation + produits financiers - charges financières ; net = avant impôt - impôt, dans les cas simplifiés présentés.",
      "itemFeedback": {
        "i0": {
          "hint": "Quelle fonction économique explique chaque poste ?",
          "confusion": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
          "explanation": "Salaires opérationnels : Exploitation. Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan."
        },
        "i1": {
          "hint": "Quelle fonction économique explique chaque poste ?",
          "confusion": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
          "explanation": "Intérêts d’emprunt : Finance. Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan."
        },
        "i2": {
          "hint": "Quelle fonction économique explique chaque poste ?",
          "confusion": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
          "explanation": "Impôt sur les bénéfices : Impôt. Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan."
        },
        "i3": {
          "hint": "Quelle fonction économique explique chaque poste ?",
          "confusion": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
          "explanation": "Emprunt reçu : Hors compte de résultat. Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan."
        }
      },
      "exampleFormulas": [
        {
          "label": "Avant impôt (exemple)",
          "expression": "50 + (-4) = 46"
        },
        {
          "label": "Net (exemple)",
          "expression": "46 - 12 = 34"
        }
      ],
      "courseRef": "r-finance-boundary-notion",
      "exampleRef": "r-finance-boundary-exemple"
    },
    {
      "id": "r-maison",
      "block": "final-result",
      "title": "2. Maison Éclat : mission autonome du résultat au net",
      "type": "assessment",
      "prompt": "Maison Éclat, en k€ : ventes réalisées 500 ; matières consommées rattachées aux ventes 180 ; personnel 120 ; loyer/logistique/marketing 90 ; amortissement 20 ; intérêts 8 ; impôt 25. Aussi : emprunt reçu 200 ; équipement acheté 150 ; encaissements clients 440 ; créance non encaissée 60. Reconstituez d’abord le document entier et les exclusions sur brouillon, puis saisissez les trois niveaux.",
      "questions": [
        {
          "type": "number",
          "prompt": "Résultat d’exploitation, en k€ ?",
          "expected": 90,
          "tolerance": 0,
          "calculation": {
            "expression": "500-180-120-90-20",
            "unit": "k€",
            "rounding": null
          },
          "id": "q0",
          "title": "Exploitation"
        },
        {
          "type": "number",
          "prompt": "Résultat avant impôt, en k€ ?",
          "expected": 82,
          "tolerance": 0,
          "calculation": {
            "expression": "500-180-120-90-20-8",
            "unit": "k€",
            "rounding": null
          },
          "id": "q1",
          "title": "Avant impôt"
        },
        {
          "type": "number",
          "prompt": "Résultat net, en k€ ?",
          "expected": 57,
          "tolerance": 0,
          "calculation": {
            "expression": "500-180-120-90-20-8-25",
            "unit": "k€",
            "rounding": null
          },
          "id": "q2",
          "title": "Résultat net"
        }
      ],
      "threshold": 3,
      "transfer": {
        "type": "single",
        "prompt": "Maison Éclat encaisse ensuite la créance de 60 k€, sans nouvelle vente ni autre opération. Que deviennent les 57 k€ de bénéfice déjà calculés ?",
        "options": [
          {
            "id": "o0",
            "label": "Le bénéfice reste 57 ; banque +60 et créance -60",
            "confusion": "Raisonnement attendu : Le produit était déjà reconnu. Le paiement transforme le droit de recevoir en cash : bénéfice inchangé, créance diminuée, banque augmentée."
          },
          {
            "id": "o1",
            "label": "Le bénéfice devient 117 ; banque +60",
            "confusion": "Confusion ciblée : Le bénéfice devient 117 ; banque +60. À confronter à : Le produit était déjà reconnu. Le paiement transforme le droit de recevoir en cash : bénéfice inchangé, créance diminuée, banque augmentée."
          },
          {
            "id": "o2",
            "label": "Le bénéfice devient -3 ; créance -60",
            "confusion": "Confusion ciblée : Le bénéfice devient -3 ; créance -60. À confronter à : Le produit était déjà reconnu. Le paiement transforme le droit de recevoir en cash : bénéfice inchangé, créance diminuée, banque augmentée."
          },
          {
            "id": "o3",
            "label": "Le bénéfice reste 57 ; une nouvelle vente de 60 est créée",
            "confusion": "Confusion ciblée : Le bénéfice reste 57 ; une nouvelle vente de 60 est créée. À confronter à : Le produit était déjà reconnu. Le paiement transforme le droit de recevoir en cash : bénéfice inchangé, créance diminuée, banque augmentée."
          }
        ],
        "expected": "o0",
        "explanation": "Le produit était déjà reconnu. Le paiement transforme le droit de recevoir en cash : bénéfice inchangé, créance diminuée, banque augmentée.",
        "skill": "Rappel : exploitation = ventes - consommations - personnel - autres charges - dotations ; avant impôt = exploitation + résultat financier ; net = avant impôt - impôt.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_EBIT_PRETAX",
      "conceptCodes": [
        "CONF_EBIT_PRETAX",
        "CONF_NET_CASH"
      ],
      "lesson": "Mission autonome issue du Guide : moins de guidage que Nova. Toutes les consommations et dotations utiles sont fournies ; aucune autre charge n’est à inventer. Identifiez les données qui relèvent du bilan ou des flux, construisez les niveaux, puis expliquez ce que le bénéfice ne prouve pas. Ne remplacez pas les ventes par les encaissements. Hypothèses : les 180 k€ sont les consommations rattachées aux ventes ; les 20 k€ incluent toutes les dotations de la période. Ne pas ajouter une seconde dotation pour l’équipement acheté.",
      "example": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
      "successFeedback": "Maison Éclat : 90 d’exploitation, 82 avant impôt, 57 de résultat net, en k€. L’emprunt finance l’activité ; l’équipement est un actif à l’achat ; la consommation du matériel est déjà représentée par la dotation donnée. Les encaissements 440 ne remplacent pas les ventes 500.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelles données décrivent une performance, et lesquelles décrivent seulement le financement ou le paiement ?",
        "hint": "Excluez emprunt et achat d’équipement du résultat immédiat. Construisez ensuite exploitation, finance, impôt.",
        "explanation": "Maison Éclat : 90 d’exploitation, 82 avant impôt, 57 de résultat net, en k€. L’emprunt finance l’activité ; l’équipement est un actif à l’achat ; la consommation du matériel est déjà représentée par la dotation donnée. Les encaissements 440 ne remplacent pas les ventes 500."
      },
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "estimatedMinutes": 8,
      "formula": "Rappel : exploitation = ventes - consommations - personnel - autres charges - dotations ; avant impôt = exploitation + résultat financier ; net = avant impôt - impôt.",
      "courseRef": "r-maison-notion",
      "exampleRef": "r-maison-exemple"
    },
    {
      "id": "r-eps",
      "block": "final-result",
      "title": "3. Bénéfice par action et distribution",
      "type": "number",
      "prompt": "Maison Éclat a 30 000 actions de même droit sur toute la période. Résultat net 57 000 €. EPS (Earnings Per Share - bénéfice par action), en euros ?",
      "expected": 1.9,
      "tolerance": 0.001,
      "transfer": {
        "type": "single",
        "prompt": "Un bénéfice de 60 000 € correspond à 2 € par action sur toute la période. Quel nombre d’actions de même droit est cohérent ?",
        "options": [
          {
            "id": "o1",
            "label": "120 000 actions",
            "confusion": "Confusion ciblée : 120 000 actions. À confronter à : Bénéfice par action = bénéfice / actions. Inversement, actions = 60 000 / 2 = 30 000. Le dénominateur est un nombre de titres, pas une somme distribuée."
          },
          {
            "id": "o0",
            "label": "30 000 actions",
            "confusion": "Raisonnement attendu : Bénéfice par action = bénéfice / actions. Inversement, actions = 60 000 / 2 = 30 000. Le dénominateur est un nombre de titres, pas une somme distribuée."
          },
          {
            "id": "o2",
            "label": "60 000 actions",
            "confusion": "Confusion ciblée : 60 000 actions. À confronter à : Bénéfice par action = bénéfice / actions. Inversement, actions = 60 000 / 2 = 30 000. Le dénominateur est un nombre de titres, pas une somme distribuée."
          },
          {
            "id": "o3",
            "label": "2 000 actions",
            "confusion": "Confusion ciblée : 2 000 actions. À confronter à : Bénéfice par action = bénéfice / actions. Inversement, actions = 60 000 / 2 = 30 000. Le dénominateur est un nombre de titres, pas une somme distribuée."
          }
        ],
        "expected": "o0",
        "explanation": "Bénéfice par action = bénéfice / actions. Inversement, actions = 60 000 / 2 = 30 000. Le dénominateur est un nombre de titres, pas une somme distribuée.",
        "skill": "Bénéfice par action = résultat attribuable aux actionnaires / nombre d’actions pertinent. Le numérateur est un bénéfice, le dénominateur un nombre d’actions, le résultat s’exprime en euros par action.",
        "difficulty": "transfert"
      },
      "errorCode": "CALC_EPS",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle part de résultat correspond à une action, indépendamment de son versement ?",
        "hint": "Divisez le bénéfice attribuable par le nombre d’actions pertinent.",
        "explanation": "57 000 / 30 000 = 1,90 € par action. C’est un bénéfice par action, pas une promesse de dividende."
      },
      "lesson": "EPS (Earnings Per Share - bénéfice par action) rapporte le résultat attribuable aux actionnaires au nombre d’actions pertinent, généralement pondéré sur la période. La distribution dépend d’une décision et d’autres contraintes. Résultat net, bénéfice par action et dividende sont trois objets distincts.",
      "example": "Exemple distinct : bénéfice attribuable 120 €, 40 actions : 120 / 40 = 3 € par action. Chaque action correspond à 3 € de bénéfice comptable ; aucun dividende n’est garanti.",
      "successFeedback": "57 000 / 30 000 = 1,90 € par action. C’est un bénéfice par action, pas une promesse de dividende.",
      "conceptCodes": [
        "CALC_EPS"
      ],
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "calculation": {
        "expression": "57000/30000",
        "unit": "€/action",
        "rounding": null
      },
      "estimatedMinutes": 3,
      "formula": "Bénéfice par action = résultat attribuable aux actionnaires / nombre d’actions pertinent. Le numérateur est un bénéfice, le dénominateur un nombre d’actions, le résultat s’exprime en euros par action.",
      "visualFormulas": [
        {
          "label": "Bénéfice par action (cas donné)",
          "numerator": "Résultat attribuable aux actions considérées",
          "denominator": "Nombre d’actions de même droit sur la période"
        }
      ],
      "exampleFormulas": [
        {
          "label": "Bénéfice par action (exemple)",
          "numerator": "120 €",
          "denominator": "40 actions",
          "multiplier": "= 3 € par action"
        }
      ],
      "courseRef": "r-eps-notion",
      "exampleRef": "r-eps-exemple"
    },
    {
      "id": "r-dividend",
      "block": "final-result",
      "title": "4. Ne pas promettre un dividende",
      "type": "multiple",
      "prompt": "Que permet de conclure un bénéfice par action de 1,90 € ?",
      "options": [
        {
          "id": "o0",
          "label": "Une action correspond à 1,90 € de bénéfice selon le périmètre retenu",
          "confusion": "Raisonnement attendu : Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action."
        },
        {
          "id": "o1",
          "label": "Chaque actionnaire a nécessairement reçu 1,90 €",
          "confusion": "Confusion ciblée : Chaque actionnaire a nécessairement reçu 1,90 €. À confronter à : Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action."
        },
        {
          "id": "o2",
          "label": "Le solde bancaire augmente nécessairement de 57 000 €",
          "confusion": "Confusion ciblée : Le solde bancaire augmente nécessairement de 57 000 €. À confronter à : Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action."
        },
        {
          "id": "o3",
          "label": "La décision de distribution reste à examiner",
          "confusion": "Raisonnement attendu : Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action."
        }
      ],
      "expected": [
        "o0",
        "o3"
      ],
      "transfer": {
        "type": "single",
        "prompt": "Bénéfice 100 k€ ; dividende décidé 30 k€ ; aucune autre affectation. Quelle paire distingue performance et affectation ?",
        "options": [
          {
            "id": "o1",
            "label": "Bénéfice 70 ; montant conservé 70",
            "confusion": "Confusion ciblée : Bénéfice 70 ; montant conservé 70. À confronter à : La distribution affecte le bénéfice après son calcul. 100 - 30 = 70 sont conservés ; le bénéfice demeure 100."
          },
          {
            "id": "o2",
            "label": "Bénéfice 100 ; montant conservé 100",
            "confusion": "Confusion ciblée : Bénéfice 100 ; montant conservé 100. À confronter à : La distribution affecte le bénéfice après son calcul. 100 - 30 = 70 sont conservés ; le bénéfice demeure 100."
          },
          {
            "id": "o0",
            "label": "Bénéfice 100 ; montant conservé 70",
            "confusion": "Raisonnement attendu : La distribution affecte le bénéfice après son calcul. 100 - 30 = 70 sont conservés ; le bénéfice demeure 100."
          },
          {
            "id": "o3",
            "label": "Bénéfice 130 ; montant conservé 100",
            "confusion": "Confusion ciblée : Bénéfice 130 ; montant conservé 100. À confronter à : La distribution affecte le bénéfice après son calcul. 100 - 30 = 70 sont conservés ; le bénéfice demeure 100."
          }
        ],
        "expected": "o0",
        "explanation": "La distribution affecte le bénéfice après son calcul. 100 - 30 = 70 sont conservés ; le bénéfice demeure 100.",
        "skill": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_EPS_DIVIDEND",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Un indicateur de performance impose-t-il une distribution ?",
        "hint": "La distribution n’est pas la formation du bénéfice.",
        "explanation": "Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action."
      },
      "lesson": "À comprendre : un bénéfice attribuable par action mesure une performance ramenée à une action, pas un virement. Une distribution dépend d’une décision, des règles applicables et de la capacité de paiement. Comparez le sens des affirmations, pas seulement le nombre de 1,90 €.",
      "example": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
      "successFeedback": "Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action.",
      "conceptCodes": [
        "CONF_EPS_DIVIDEND"
      ],
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "estimatedMinutes": 2,
      "skill": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "difficulty": "application",
      "courseRef": "r-dividend-notion",
      "exampleRef": "r-dividend-exemple"
    },
    {
      "id": "r-distribution",
      "block": "final-result",
      "title": "5. Bénéfice, mise en réserve et dividende",
      "type": "classification",
      "prompt": "Maison Éclat dégage 57 k€ de bénéfice. Une distribution de 20 k€ est décidée, le reste est conservé. Classez les deux montants.",
      "items": [
        {
          "id": "i0",
          "label": "57 k€"
        },
        {
          "id": "i1",
          "label": "20 k€"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Performance comptable de la période"
        },
        {
          "id": "g1",
          "label": "Affectation d’une partie du bénéfice, pas une nouvelle charge"
        },
        {
          "id": "gx",
          "label": "Décision d’affectation du bénéfice, après son calcul"
        },
        {
          "id": "gy",
          "label": "Donnée insuffisante : aucun classement certain"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1"
      },
      "transfer": {
        "type": "single",
        "prompt": "Une distribution a été décidée mais sera payée plus tard. Quelle distinction doit apparaître dans la note au manager ?",
        "options": [
          {
            "id": "o1",
            "label": "La décision crée une nouvelle charge d’exploitation",
            "confusion": "Confusion ciblée : La décision crée une nouvelle charge d’exploitation. À confronter à : La formation du bénéfice, son affectation et le versement sont trois événements différents. La décision ne prouve pas un mouvement bancaire déjà réalisé."
          },
          {
            "id": "o2",
            "label": "La décision diminue le chiffre d’affaires de l’année",
            "confusion": "Confusion ciblée : La décision diminue le chiffre d’affaires de l’année. À confronter à : La formation du bénéfice, son affectation et le versement sont trois événements différents. La décision ne prouve pas un mouvement bancaire déjà réalisé."
          },
          {
            "id": "o3",
            "label": "La décision prouve que le cash a déjà été versé",
            "confusion": "Confusion ciblée : La décision prouve que le cash a déjà été versé. À confronter à : La formation du bénéfice, son affectation et le versement sont trois événements différents. La décision ne prouve pas un mouvement bancaire déjà réalisé."
          },
          {
            "id": "o0",
            "label": "Décision d’affectation et paiement ont des dates distinctes",
            "confusion": "Raisonnement attendu : La formation du bénéfice, son affectation et le versement sont trois événements différents. La décision ne prouve pas un mouvement bancaire déjà réalisé."
          }
        ],
        "expected": "o0",
        "explanation": "La formation du bénéfice, son affectation et le versement sont trois événements différents. La décision ne prouve pas un mouvement bancaire déjà réalisé.",
        "skill": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_NET_DIVIDEND",
      "conceptCodes": [
        "CONF_NET_DIVIDEND"
      ],
      "lesson": "À comprendre : ce que l’entreprise gagne est-il identique à ce qu’elle verse aux associés ? Le bénéfice peut être conservé ou distribué selon les décisions et règles applicables. Une distribution ne devient pas une charge du compte de résultat. Un bénéfice par action n’est pas une promesse de paiement.",
      "example": "Bénéfice 100, distribution décidée 30, conservation 70 : le résultat reste 100. Le calendrier du paiement et la trésorerie disponible constituent des questions séparées.",
      "successFeedback": "Le résultat reste 57 k€ ; les 20 k€ décrivent une affectation. La distribution exige aussi d’examiner décision, règles et trésorerie, sans déduire le paiement du seul bénéfice.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Les associés sont-ils rémunérés avant de déterminer le résultat ou après son affectation ?",
        "hint": "Ne mélangez pas calcul de la performance et décision de distribution.",
        "explanation": "Le résultat reste 57 k€ ; les 20 k€ décrivent une affectation. La distribution exige aussi d’examiner décision, règles et trésorerie, sans déduire le paiement du seul bénéfice."
      },
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Les associés sont-ils rémunérés avant de déterminer le résultat ou après son affectation ?",
          "confusion": "Ne mélangez pas calcul de la performance et décision de distribution.",
          "explanation": "57 k€ : Performance comptable de la période. Le résultat reste 57 k€ ; les 20 k€ décrivent une affectation. La distribution exige aussi d’examiner décision, règles et trésorerie, sans déduire le paiement du seul bénéfice."
        },
        "i1": {
          "hint": "Les associés sont-ils rémunérés avant de déterminer le résultat ou après son affectation ?",
          "confusion": "Ne mélangez pas calcul de la performance et décision de distribution.",
          "explanation": "20 k€ : Affectation d’une partie du bénéfice, pas une nouvelle charge. Le résultat reste 57 k€ ; les 20 k€ décrivent une affectation. La distribution exige aussi d’examiner décision, règles et trésorerie, sans déduire le paiement du seul bénéfice."
        }
      },
      "courseRef": "r-distribution-notion",
      "exampleRef": "r-distribution-exemple"
    },
    {
      "id": "r-note",
      "block": "final-result",
      "title": "6. Expliquer une limite avant une décision",
      "type": "reflection",
      "prompt": "Maison Éclat : rédigez une note de 120 à 1 000 caractères, sans donnée personnelle. Expliquez pourquoi 57 k€ de résultat net ne prouvent ni un solde bancaire ni un dividende. Citez deux données du dossier et une information à obtenir avant une distribution.",
      "minLength": 120,
      "criteria": [
        {
          "id": "facts",
          "label": "Je cite deux montants et leur objet."
        },
        {
          "id": "limits",
          "label": "Je distingue résultat, trésorerie et distribution."
        },
        {
          "id": "verify",
          "label": "Je précise une information à vérifier."
        }
      ],
      "model": "Maison Éclat réalise 500 k€ de ventes, mais n’en encaisse que 440 ; une créance de 60 subsiste. Son bénéfice de 57 k€ ne décrit donc pas le solde bancaire. L’emprunt reçu et l’équipement ont aussi des effets de trésorerie. Vérifier les disponibilités, échéances et règles de distribution avant de proposer un dividende.",
      "transfer": {
        "type": "single",
        "prompt": "Un manager veut verser tout le bénéfice malgré des créances non encaissées. Quel document demander pour vérifier la capacité immédiate à payer ?",
        "options": [
          {
            "id": "o0",
            "label": "Un état de trésorerie avec échéancier des paiements",
            "confusion": "Raisonnement attendu : Un bénéfice ne décrit pas la banque disponible ni les échéances. Le contrôle de paiement porte sur les disponibilités et leur calendrier, avec les conditions de distribution."
          },
          {
            "id": "o1",
            "label": "Un compte de résultat limité au bénéfice annuel",
            "confusion": "Confusion ciblée : Un compte de résultat limité au bénéfice annuel. À confronter à : Un bénéfice ne décrit pas la banque disponible ni les échéances. Le contrôle de paiement porte sur les disponibilités et leur calendrier, avec les conditions de distribution."
          },
          {
            "id": "o2",
            "label": "Un détail des amortissements uniquement",
            "confusion": "Confusion ciblée : Un détail des amortissements uniquement. À confronter à : Un bénéfice ne décrit pas la banque disponible ni les échéances. Le contrôle de paiement porte sur les disponibilités et leur calendrier, avec les conditions de distribution."
          },
          {
            "id": "o3",
            "label": "Un tableau du bénéfice par action uniquement",
            "confusion": "Confusion ciblée : Un tableau du bénéfice par action uniquement. À confronter à : Un bénéfice ne décrit pas la banque disponible ni les échéances. Le contrôle de paiement porte sur les disponibilités et leur calendrier, avec les conditions de distribution."
          }
        ],
        "expected": "o0",
        "explanation": "Un bénéfice ne décrit pas la banque disponible ni les échéances. Le contrôle de paiement porte sur les disponibilités et leur calendrier, avec les conditions de distribution.",
        "skill": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_NET_CASH",
      "conceptCodes": [
        "CONF_NET_CASH"
      ],
      "lesson": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
      "example": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
      "successFeedback": "Vous avez distingué une performance, des mouvements et une affectation. Le modèle est une proposition de raisonnement ; il ne démontre pas une capacité à payer.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle information ne se lit pas dans le seul résultat net ?",
        "hint": "Utilisez le décalage ventes/encaissements et nommez le document ou calendrier à vérifier.",
        "explanation": "Vous avez distingué une performance, des mouvements et une affectation. Le modèle est une proposition de raisonnement ; il ne démontre pas une capacité à payer."
      },
      "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
      "estimatedMinutes": 3,
      "writingGuide": {
        "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
        "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
        "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
        "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
        "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
        "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
        "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
      },
      "courseRef": "r-note-notion",
      "exampleRef": "r-note-exemple"
    },
    {
      "id": "a-mydeco",
      "block": "analysis",
      "title": "1. Mydeco : croissance et rentabilité",
      "type": "number",
      "prompt": "Données pédagogiques adaptées Mydeco : ventes N-1 1 000 k€, exploitation 120 k€ ; ventes N 1 200 k€, exploitation 108 k€. Marge opérationnelle de N, en pourcentage ?",
      "expected": 9,
      "tolerance": 0.01,
      "transfer": {
        "type": "single",
        "prompt": "Ventes +20 %, exploitation -10 %. La marge passe de 12 % à 9 %. Quelle formulation distingue les deux variations du taux ?",
        "options": [
          {
            "id": "o1",
            "label": "-3 % ; -25 points relativement au taux initial",
            "confusion": "Confusion ciblée : -3 % ; -25 points relativement au taux initial. À confronter à : Écart de taux : 9 - 12 = -3 points. Variation relative : (9 - 12) / 12 × 100 = -25 %. Les ventes et le résultat ont encore d’autres variations."
          },
          {
            "id": "o0",
            "label": "-3 points ; -25 % relativement au taux initial",
            "confusion": "Raisonnement attendu : Écart de taux : 9 - 12 = -3 points. Variation relative : (9 - 12) / 12 × 100 = -25 %. Les ventes et le résultat ont encore d’autres variations."
          },
          {
            "id": "o2",
            "label": "-25 points ; -3 % relativement au taux initial",
            "confusion": "Confusion ciblée : -25 points ; -3 % relativement au taux initial. À confronter à : Écart de taux : 9 - 12 = -3 points. Variation relative : (9 - 12) / 12 × 100 = -25 %. Les ventes et le résultat ont encore d’autres variations."
          },
          {
            "id": "o3",
            "label": "-10 points ; +20 % relativement au taux initial",
            "confusion": "Confusion ciblée : -10 points ; +20 % relativement au taux initial. À confronter à : Écart de taux : 9 - 12 = -3 points. Variation relative : (9 - 12) / 12 × 100 = -25 %. Les ventes et le résultat ont encore d’autres variations."
          }
        ],
        "expected": "o0",
        "explanation": "Écart de taux : 9 - 12 = -3 points. Variation relative : (9 - 12) / 12 × 100 = -25 %. Les ventes et le résultat ont encore d’autres variations.",
        "skill": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100. Le chiffre d’affaires au dénominateur fixe une base de 100 € de ventes. Croissance d’un montant = (montant final - montant initial) / montant initial × 100 ; variation d’un taux en points = taux final - taux initial.",
        "difficulty": "transfert"
      },
      "errorCode": "CALC_MARGIN_RATE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel résultat rapporte-t-on à quel niveau de ventes ?",
        "hint": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100.",
        "explanation": "108 / 1 200 × 100 = 9 %, contre 12 % en N-1. Les ventes progressent de 20 %, mais le résultat d’exploitation baisse de 10 %."
      },
      "lesson": "À comprendre : vendre plus signifie-t-il gagner plus ou devenir plus rentable ? Comparez d’abord les montants, puis un taux qui rapporte le même niveau de résultat aux ventes. Cas Mydeco / Global du catalogue pédagogique, adaptés à des fins pédagogiques : aucune conclusion sur une entreprise réelle.",
      "example": "Exemple distinct : ventes 100 puis 120 ; exploitation 20 puis 18. Taux initial 20 / 100 × 100 = 20 % ; final 18 / 120 × 100 = 15 %. Croissance des ventes (120 - 100) / 100 × 100 = 20 % ; exploitation (18 - 20) / 20 × 100 = -10 %. Écart de taux 15 - 20 = -5 points ; variation relative (15 - 20) / 20 × 100 = -25 %. Une hausse des coûts pourrait l’expliquer ; vérifier coûts et mix.",
      "successFeedback": "108 / 1 200 × 100 = 9 %, contre 12 % en N-1. Les ventes progressent de 20 %, mais le résultat d’exploitation baisse de 10 %.",
      "conceptCodes": [
        "CALC_MARGIN_RATE"
      ],
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "calculation": {
        "expression": "108/1200*100",
        "unit": "%",
        "rounding": null
      },
      "estimatedMinutes": 4,
      "formula": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100. Le chiffre d’affaires au dénominateur fixe une base de 100 € de ventes. Croissance d’un montant = (montant final - montant initial) / montant initial × 100 ; variation d’un taux en points = taux final - taux initial.",
      "visualFormulas": [
        {
          "label": "Marge opérationnelle",
          "numerator": "Résultat d’exploitation",
          "denominator": "Chiffre d’affaires",
          "multiplier": "× 100"
        },
        {
          "label": "Croissance",
          "numerator": "Montant final - montant initial",
          "denominator": "Montant initial",
          "multiplier": "× 100"
        },
        {
          "label": "Variation en points",
          "expression": "Taux final - taux initial"
        },
        {
          "label": "Variation relative du taux",
          "numerator": "Taux final - taux initial",
          "denominator": "Taux initial",
          "multiplier": "× 100"
        }
      ],
      "exampleFormulas": [],
      "courseRef": "a-mydeco-notion",
      "exampleRef": "a-mydeco-exemple"
    },
    {
      "id": "a-global",
      "block": "analysis",
      "title": "2. Global : suivre le bon indicateur",
      "type": "number",
      "prompt": "Global, données pédagogiques : ventes de 1 000 à 1 150 k€, exploitation de 100 à 92 k€. Marge opérationnelle finale, en pourcentage ?",
      "expected": 8,
      "tolerance": 0.01,
      "transfer": {
        "type": "single",
        "prompt": "Une note compare la marge brute N-1 à la marge nette N. Quel contrôle faut-il faire avant d’attribuer la baisse aux coûts ?",
        "options": [
          {
            "id": "o1",
            "label": "Comparer les deux taux sans changer leur numérateur",
            "confusion": "Confusion ciblée : Comparer les deux taux sans changer leur numérateur. À confronter à : On doit comparer des indicateurs de même définition et périmètre. Une marge brute et une marge nette n’ont pas le même numérateur."
          },
          {
            "id": "o2",
            "label": "Remplacer les ventes N par les ventes N-1 au dénominateur",
            "confusion": "Confusion ciblée : Remplacer les ventes N par les ventes N-1 au dénominateur. À confronter à : On doit comparer des indicateurs de même définition et périmètre. Une marge brute et une marge nette n’ont pas le même numérateur."
          },
          {
            "id": "o0",
            "label": "Recalculer le même niveau de marge sur les deux périodes",
            "confusion": "Raisonnement attendu : On doit comparer des indicateurs de même définition et périmètre. Une marge brute et une marge nette n’ont pas le même numérateur."
          },
          {
            "id": "o3",
            "label": "Comparer seulement les montants de ventes publiés",
            "confusion": "Confusion ciblée : Comparer seulement les montants de ventes publiés. À confronter à : On doit comparer des indicateurs de même définition et périmètre. Une marge brute et une marge nette n’ont pas le même numérateur."
          }
        ],
        "expected": "o0",
        "explanation": "On doit comparer des indicateurs de même définition et périmètre. Une marge brute et une marge nette n’ont pas le même numérateur.",
        "skill": "Rappel : taux opérationnel = exploitation / ventes × 100 ; croissance = (final - initial) / initial × 100 ; différence de taux en points = taux final - taux initial. À base zéro, le taux de croissance n’est pas calculable par cette formule.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_AMOUNT_RATE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Le dénominateur doit-il rester celui de l’année ancienne ?",
        "hint": "Utilisez les ventes de la même année que le résultat.",
        "explanation": "92 / 1 150 = 8 %. Les ventes augmentent de 15 % mais la marge passe de 10 % à 8 %, soit -2 points, pas -2 %."
      },
      "lesson": "Manipulation : sur brouillon, écrivez séparément variation des ventes, variation du résultat et variation du taux en points. Comparez ensuite Mydeco et Global avec le même numérateur. Une baisse de deux points n’est pas une baisse relative de 2 %. Une marge brute et une marge nette ne sont pas comparables sans qualification. Pour un taux passant de 15 % à 12 %, la variation est -3 points. La variation relative est (12 - 15) / 15 × 100 = -20 %. Le taux initial doit être non nul.",
      "example": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
      "successFeedback": "92 / 1 150 = 8 %. Les ventes augmentent de 15 % mais la marge passe de 10 % à 8 %, soit -2 points, pas -2 %.",
      "conceptCodes": [
        "CONF_AMOUNT_RATE"
      ],
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "calculation": {
        "expression": "92/1150*100",
        "unit": "%",
        "rounding": null
      },
      "estimatedMinutes": 3,
      "formula": "Rappel : taux opérationnel = exploitation / ventes × 100 ; croissance = (final - initial) / initial × 100 ; différence de taux en points = taux final - taux initial. À base zéro, le taux de croissance n’est pas calculable par cette formule.",
      "visualFormulas": [
        {
          "label": "Marge opérationnelle",
          "numerator": "Résultat d’exploitation",
          "denominator": "Chiffre d’affaires",
          "multiplier": "× 100"
        },
        {
          "label": "Croissance",
          "numerator": "Montant final - montant initial",
          "denominator": "Montant initial",
          "multiplier": "× 100"
        },
        {
          "label": "Variation en points",
          "expression": "Taux final - taux initial"
        },
        {
          "label": "Variation relative du taux",
          "numerator": "Taux final - taux initial",
          "denominator": "Taux initial",
          "multiplier": "× 100"
        }
      ],
      "courseRef": "a-global-notion",
      "exampleRef": "a-global-exemple"
    },
    {
      "id": "a-method",
      "block": "analysis",
      "title": "3. Observation, hypothèse, vérification",
      "type": "classification",
      "prompt": "Classez les trois phrases de votre note.",
      "items": [
        {
          "id": "i0",
          "label": "La marge opérationnelle est passée de 12 % à 9 %."
        },
        {
          "id": "i1",
          "label": "Une hausse du coût des matières pourrait expliquer une partie de la baisse."
        },
        {
          "id": "i2",
          "label": "Obtenir le coût matière unitaire et le mix des ventes sur les deux périodes."
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Observation"
        },
        {
          "id": "g1",
          "label": "Hypothèse"
        },
        {
          "id": "g2",
          "label": "Information à vérifier"
        },
        {
          "id": "gx",
          "label": "Décision d’affectation du bénéfice, après son calcul"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2"
      },
      "transfer": {
        "type": "single",
        "prompt": "« Les dépenses de lancement pourraient expliquer la baisse. » Que faut-il ajouter pour transformer cette hypothèse en enquête ?",
        "options": [
          {
            "id": "o1",
            "label": "Présenter la baisse comme une preuve du coût des lancements",
            "confusion": "Confusion ciblée : Présenter la baisse comme une preuve du coût des lancements. À confronter à : Le détail des dépenses et leur évolution permettent de tester l’explication. Le conditionnel exprime une possibilité ; il ne démontre pas la cause."
          },
          {
            "id": "o2",
            "label": "Supprimer les lancements pour observer ensuite le résultat",
            "confusion": "Confusion ciblée : Supprimer les lancements pour observer ensuite le résultat. À confronter à : Le détail des dépenses et leur évolution permettent de tester l’explication. Le conditionnel exprime une possibilité ; il ne démontre pas la cause."
          },
          {
            "id": "o3",
            "label": "Recalculer seulement le taux sans demander d’autre donnée",
            "confusion": "Confusion ciblée : Recalculer seulement le taux sans demander d’autre donnée. À confronter à : Le détail des dépenses et leur évolution permettent de tester l’explication. Le conditionnel exprime une possibilité ; il ne démontre pas la cause."
          },
          {
            "id": "o0",
            "label": "Obtenir le détail des dépenses de lancement et leur évolution",
            "confusion": "Raisonnement attendu : Le détail des dépenses et leur évolution permettent de tester l’explication. Le conditionnel exprime une possibilité ; il ne démontre pas la cause."
          }
        ],
        "expected": "o0",
        "explanation": "Le détail des dépenses et leur évolution permettent de tester l’explication. Le conditionnel exprime une possibilité ; il ne démontre pas la cause.",
        "skill": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_OBSERVATION_HYPOTHESIS",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle phrase est directement vérifiable dans les chiffres disponibles ?",
        "hint": "Une cause possible n’est pas une cause démontrée.",
        "explanation": "L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication."
      },
      "lesson": "Méthode explicite : Observation -> Hypothèse -> Information à vérifier. L’observation décrit un fait mesuré. L’hypothèse propose une explication conditionnelle. L’information à vérifier doit permettre de départager des explications : coût unitaire, prix, volume, mix ou périmètre. Ne choisissez pas d’abord une décision pour chercher ensuite des chiffres qui la justifient.",
      "example": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
      "successFeedback": "L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication.",
      "conceptCodes": [
        "CONF_OBSERVATION_HYPOTHESIS"
      ],
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "estimatedMinutes": 3,
      "itemFeedback": {
        "i0": {
          "hint": "Quelle phrase est directement vérifiable dans les chiffres disponibles ?",
          "confusion": "Une cause possible n’est pas une cause démontrée.",
          "explanation": "La marge opérationnelle est passée de 12 % à 9 %. : Observation. L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication."
        },
        "i1": {
          "hint": "Quelle phrase est directement vérifiable dans les chiffres disponibles ?",
          "confusion": "Une cause possible n’est pas une cause démontrée.",
          "explanation": "Une hausse du coût des matières pourrait expliquer une partie de la baisse. : Hypothèse. L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication."
        },
        "i2": {
          "hint": "Quelle phrase est directement vérifiable dans les chiffres disponibles ?",
          "confusion": "Une cause possible n’est pas une cause démontrée.",
          "explanation": "Obtenir le coût matière unitaire et le mix des ventes sur les deux périodes. : Information à vérifier. L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication."
        }
      },
      "courseRef": "a-method-notion",
      "exampleRef": "a-method-exemple"
    },
    {
      "id": "a-verdict",
      "block": "analysis",
      "title": "4. Un indicateur suffit-il pour trancher ?",
      "type": "single",
      "prompt": "Mydeco vend davantage mais sa marge opérationnelle diminue. Quelle conclusion est défendable ?",
      "options": [
        {
          "id": "o0",
          "label": "Tester les causes et le périmètre avant de décider",
          "confusion": "Raisonnement attendu : La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester."
        },
        {
          "id": "o1",
          "label": "Conclure à une meilleure rentabilité par la hausse des ventes",
          "confusion": "Confusion ciblée : Conclure à une meilleure rentabilité par la hausse des ventes. À confronter à : La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester."
        },
        {
          "id": "o2",
          "label": "Conclure à une trésorerie dégradée par la baisse du taux",
          "confusion": "Confusion ciblée : Conclure à une trésorerie dégradée par la baisse du taux. À confronter à : La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester."
        },
        {
          "id": "o3",
          "label": "Comparer le résultat N aux ventes N-1 pour décider",
          "confusion": "Confusion ciblée : Comparer le résultat N aux ventes N-1 pour décider. À confronter à : La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester."
        }
      ],
      "expected": "o0",
      "transfer": {
        "type": "single",
        "prompt": "Deux entreprises affichent le même taux opérationnel. Quelle vérification précède une comparaison de leur qualité globale ?",
        "options": [
          {
            "id": "o1",
            "label": "Les classer à égalité sur la seule base de ce taux",
            "confusion": "Confusion ciblée : Les classer à égalité sur la seule base de ce taux. À confronter à : Le taux décrit une performance relative selon un périmètre. Secteur, risque, besoins d’investissement et liquidité restent nécessaires au diagnostic."
          },
          {
            "id": "o0",
            "label": "Examiner secteur, risque, investissements et trésorerie",
            "confusion": "Raisonnement attendu : Le taux décrit une performance relative selon un périmètre. Secteur, risque, besoins d’investissement et liquidité restent nécessaires au diagnostic."
          },
          {
            "id": "o2",
            "label": "Départager uniquement par le chiffre d’affaires le plus élevé",
            "confusion": "Confusion ciblée : Départager uniquement par le chiffre d’affaires le plus élevé. À confronter à : Le taux décrit une performance relative selon un périmètre. Secteur, risque, besoins d’investissement et liquidité restent nécessaires au diagnostic."
          },
          {
            "id": "o3",
            "label": "Retenir uniquement celle dont le résultat net est plus grand",
            "confusion": "Confusion ciblée : Retenir uniquement celle dont le résultat net est plus grand. À confronter à : Le taux décrit une performance relative selon un périmètre. Secteur, risque, besoins d’investissement et liquidité restent nécessaires au diagnostic."
          }
        ],
        "expected": "o0",
        "explanation": "Le taux décrit une performance relative selon un périmètre. Secteur, risque, besoins d’investissement et liquidité restent nécessaires au diagnostic.",
        "skill": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_REVENUE_PERFORMANCE",
      "conceptCodes": [
        "CONF_REVENUE_PERFORMANCE"
      ],
      "lesson": "À retenir : un ratio isolé n’est ni un classement moral ni un diagnostic complet. Secteur, modèle économique, risque, investissements et trésorerie comptent aussi. Une observation défavorable peut avoir plusieurs causes ; choisissez une information qui les départage.",
      "example": "Ventes en hausse et marge en baisse peuvent refléter un mix différent, une hausse des coûts ou une stratégie commerciale. Les seules deux séries ne permettent pas de décider laquelle de ces explications domine.",
      "successFeedback": "La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Que savez-vous réellement sur la cause à partir de ces seuls chiffres ?",
        "hint": "Distinguez l’indicateur de taille, le taux de rentabilité et l’explication encore incertaine.",
        "explanation": "La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester."
      },
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "estimatedMinutes": 2,
      "skill": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "difficulty": "application",
      "courseRef": "a-verdict-notion",
      "exampleRef": "a-verdict-exemple"
    },
    {
      "id": "a-note",
      "block": "analysis",
      "title": "5. Rédiger une note de décision prudente",
      "type": "reflection",
      "prompt": "Mydeco : écrivez au moins 120 caractères, sans information personnelle. Incluez deux observations chiffrées, une hypothèse et une information à vérifier avant de recommander une action. Relisez avec les trois critères puis cochez-les honnêtement.",
      "minLength": 120,
      "criteria": [
        {
          "id": "observation",
          "label": "Je distingue une donnée observée de son explication possible."
        },
        {
          "id": "hypothesis",
          "label": "Je formule une hypothèse conditionnelle, sans la présenter comme certaine."
        },
        {
          "id": "verification",
          "label": "Je précise une information vérifiable avant une décision."
        }
      ],
      "model": "Exemple de raisonnement : les ventes progressent de 1 000 à 1 200 k€ tandis que l’exploitation baisse de 120 à 108 k€. La marge passe de 12 % à 9 %. Une hausse des coûts unitaires ou un mix moins rentable pourrait contribuer. Vérifier volumes, prix, coût unitaire et périmètre avant de décider une hausse de prix.",
      "transfer": {
        "type": "single",
        "prompt": "Quelle conclusion reste conditionnelle après l’observation d’un taux en baisse ?",
        "options": [
          {
            "id": "o1",
            "label": "Réduire immédiatement tous les coûts pour rétablir le taux",
            "confusion": "Confusion ciblée : Réduire immédiatement tous les coûts pour rétablir le taux. À confronter à : La recommandation dépend de la vérification d’une hypothèse. Une observation seule ne permet pas d’identifier la meilleure action."
          },
          {
            "id": "o2",
            "label": "Augmenter les prix sans examiner volumes ni concurrence",
            "confusion": "Confusion ciblée : Augmenter les prix sans examiner volumes ni concurrence. À confronter à : La recommandation dépend de la vérification d’une hypothèse. Une observation seule ne permet pas d’identifier la meilleure action."
          },
          {
            "id": "o0",
            "label": "Vérifier coûts unitaires et mix, puis cibler une revue si l’hypothèse se confirme",
            "confusion": "Raisonnement attendu : La recommandation dépend de la vérification d’une hypothèse. Une observation seule ne permet pas d’identifier la meilleure action."
          },
          {
            "id": "o3",
            "label": "Attendre le bénéfice net sans analyser l’exploitation",
            "confusion": "Confusion ciblée : Attendre le bénéfice net sans analyser l’exploitation. À confronter à : La recommandation dépend de la vérification d’une hypothèse. Une observation seule ne permet pas d’identifier la meilleure action."
          }
        ],
        "expected": "o0",
        "explanation": "La recommandation dépend de la vérification d’une hypothèse. Une observation seule ne permet pas d’identifier la meilleure action.",
        "skill": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_HYPOTHESIS_CONCLUSION",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Votre texte distingue-t-il données, mécanisme possible et preuve à rechercher ?",
        "hint": "Citez deux nombres comparables ; utilisez « pourrait » ; demandez une donnée précise.",
        "explanation": "Une hypothèse doit rester révisable. Le modèle est une proposition, pas une causalité prouvée."
      },
      "lesson": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
      "example": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
      "successFeedback": "Une hypothèse doit rester révisable. Le modèle est une proposition, pas une causalité prouvée.",
      "conceptCodes": [
        "CONF_HYPOTHESIS_CONCLUSION"
      ],
      "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
      "estimatedMinutes": 6,
      "writingGuide": {
        "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
        "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
        "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
        "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
        "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
        "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
        "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
      },
      "courseRef": "a-note-notion",
      "exampleRef": "a-note-exemple"
    },
    {
      "id": "s-rates",
      "block": "sig",
      "title": "1. Marge commerciale et dénominateurs",
      "type": "assessment",
      "prompt": "Exemple du Guide : ventes de marchandises 150, coût acheté-vendu 100. Donnez les trois résultats.",
      "questions": [
        {
          "id": "q0",
          "title": "Marge commerciale",
          "type": "number",
          "prompt": "Marge commerciale en unités monétaires ?",
          "expected": 50,
          "tolerance": 0,
          "calculation": {
            "expression": "150-100",
            "unit": "unités monétaires",
            "rounding": null
          }
        },
        {
          "id": "q1",
          "title": "Taux de marge",
          "type": "number",
          "prompt": "Marge commerciale / coût acheté-vendu × 100, en pourcentage ?",
          "expected": 50,
          "tolerance": 0.01,
          "calculation": {
            "expression": "(150-100)/100*100",
            "unit": "%",
            "rounding": null
          }
        },
        {
          "id": "q2",
          "title": "Taux de marque",
          "type": "number",
          "prompt": "Marge commerciale / ventes × 100, en pourcentage, à un dixième ?",
          "expected": 33.3,
          "tolerance": 0.05,
          "calculation": {
            "expression": "(150-100)/150*100",
            "unit": "%",
            "rounding": 1
          }
        }
      ],
      "threshold": 3,
      "transfer": {
        "type": "single",
        "prompt": "Un vendeur applique 25 % de taux de marge à un coût acheté-vendu de 80 €. Quel prix et quel taux de marque correspondent ?",
        "options": [
          {
            "id": "o1",
            "label": "Prix 100 € ; taux de marque 25 %",
            "confusion": "Confusion ciblée : Prix 100 € ; taux de marque 25 %. À confronter à : Marge = 80 × 25 / 100 = 20 €. Prix = 80 + 20 = 100 €. Taux de marque = 20 / 100 × 100 = 20 %. Les bases de calcul diffèrent."
          },
          {
            "id": "o2",
            "label": "Prix 106,67 € ; taux de marque 25 %",
            "confusion": "Confusion ciblée : Prix 106,67 € ; taux de marque 25 %. À confronter à : Marge = 80 × 25 / 100 = 20 €. Prix = 80 + 20 = 100 €. Taux de marque = 20 / 100 × 100 = 20 %. Les bases de calcul diffèrent."
          },
          {
            "id": "o3",
            "label": "Prix 80 € ; taux de marque 20 %",
            "confusion": "Confusion ciblée : Prix 80 € ; taux de marque 20 %. À confronter à : Marge = 80 × 25 / 100 = 20 €. Prix = 80 + 20 = 100 €. Taux de marque = 20 / 100 × 100 = 20 %. Les bases de calcul diffèrent."
          },
          {
            "id": "o0",
            "label": "Prix 100 € ; taux de marque 20 %",
            "confusion": "Raisonnement attendu : Marge = 80 × 25 / 100 = 20 €. Prix = 80 + 20 = 100 €. Taux de marque = 20 / 100 × 100 = 20 %. Les bases de calcul diffèrent."
          }
        ],
        "expected": "o0",
        "explanation": "Marge = 80 × 25 / 100 = 20 €. Prix = 80 + 20 = 100 €. Taux de marque = 20 / 100 × 100 = 20 %. Les bases de calcul diffèrent.",
        "skill": "Taux de marge du négoce = marge commerciale / coût acheté-vendu × 100 ; taux de marque = marge commerciale / ventes × 100. Le premier mesure la marge rapportée au coût, le second la part des ventes restant après ce coût.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_MARGIN_TYPE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel dénominateur correspond à la question posée ?",
        "hint": "Le taux de marge utilise le coût acheté-vendu ; le taux de marque utilise les ventes.",
        "explanation": "150 - 100 = 50 ; 50 / 100 = 50 % de taux de marge ; 50 / 150 = 33,3 % de taux de marque."
      },
      "lesson": "Pourquoi 10 M€ de résultat ne suffisent-ils pas à comparer deux entreprises ? Rapportez le résultat à une base cohérente. Pour le négoce, le taux de marge rapporte la marge commerciale au coût des marchandises vendues. Le taux de marque la rapporte aux ventes. Ces deux dénominateurs répondent à des questions distinctes.",
      "example": "Négoce repère : ventes 160, coût acheté-vendu 100. La marge est 60. Rapportée au coût, elle donne 60 %. Rapportée aux ventes, elle donne 37,5 %. Appliquez ensuite les formules aux données de votre activité.",
      "successFeedback": "150 - 100 = 50 ; 50 / 100 = 50 % de taux de marge ; 50 / 150 = 33,3 % de taux de marque.",
      "conceptCodes": [
        "CONF_MARGIN_TYPE"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "estimatedMinutes": 2,
      "formula": "Taux de marge du négoce = marge commerciale / coût acheté-vendu × 100 ; taux de marque = marge commerciale / ventes × 100. Le premier mesure la marge rapportée au coût, le second la part des ventes restant après ce coût.",
      "visualFormulas": [
        {
          "label": "Marge commerciale",
          "expression": "Ventes de marchandises - coût acheté-vendu"
        },
        {
          "label": "Taux de marge",
          "numerator": "Marge commerciale",
          "denominator": "Coût acheté-vendu",
          "multiplier": "× 100"
        },
        {
          "label": "Taux de marque",
          "numerator": "Marge commerciale",
          "denominator": "Ventes de marchandises",
          "multiplier": "× 100"
        }
      ],
      "courseRef": "s-rates-notion",
      "exampleRef": "s-rates-exemple"
    },
    {
      "id": "s-commercial",
      "block": "sig",
      "title": "2. Atelier Noma : achat-revente et production",
      "type": "number",
      "prompt": "Atelier Noma : ventes de marchandises 300 k€, coût d’achat des marchandises vendues 180 k€. Marge commerciale, en k€ ?",
      "expected": 120,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Une entreprise ne fait que produire ses biens. Peut-on appeler sa marge brute « marge commerciale SIG » sans autre analyse ?",
        "options": [
          {
            "id": "o0",
            "label": "Non : la marge commerciale analyse l’achat-revente",
            "confusion": "Raisonnement attendu : La marge commerciale isole le négoce, c’est-à-dire l’achat de marchandises revendues. La production relève d’une autre construction ; le nom « marge » ne suffit pas."
          },
          {
            "id": "o1",
            "label": "Oui : toute différence ventes-coûts est ce SIG",
            "confusion": "Confusion ciblée : Oui : toute différence ventes-coûts est ce SIG. À confronter à : La marge commerciale isole le négoce, c’est-à-dire l’achat de marchandises revendues. La production relève d’une autre construction ; le nom « marge » ne suffit pas."
          },
          {
            "id": "o2",
            "label": "Oui : dès que les ventes sont encaissées",
            "confusion": "Confusion ciblée : Oui : dès que les ventes sont encaissées. À confronter à : La marge commerciale isole le négoce, c’est-à-dire l’achat de marchandises revendues. La production relève d’une autre construction ; le nom « marge » ne suffit pas."
          },
          {
            "id": "o3",
            "label": "Non : il faut d’abord retrancher les intérêts financiers",
            "confusion": "Confusion ciblée : Non : il faut d’abord retrancher les intérêts financiers. À confronter à : La marge commerciale isole le négoce, c’est-à-dire l’achat de marchandises revendues. La production relève d’une autre construction ; le nom « marge » ne suffit pas."
          }
        ],
        "expected": "o0",
        "explanation": "La marge commerciale isole le négoce, c’est-à-dire l’achat de marchandises revendues. La production relève d’une autre construction ; le nom « marge » ne suffit pas.",
        "skill": "Marge commerciale = ventes de marchandises - coût d’achat des marchandises vendues. Elle concerne l’achat-revente.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_GROSS_COMMERCIAL_MARGIN",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "S’agit-il d’achat-revente ou de production industrielle ?",
        "hint": "La marge commerciale isole l’achat-revente de marchandises.",
        "explanation": "300 - 180 = 120 k€. La marge brute d’un groupe industriel ne se confond pas automatiquement avec cette marge commerciale."
      },
      "lesson": "À comprendre : que reste-t-il de l’achat-revente après le coût des marchandises vendues ? La marge commerciale répond à cette question dans les SIG (Soldes intermédiaires de gestion). Cette grille française, liée au PCG (Plan comptable général), ne se superpose pas automatiquement aux états IFRS (International Financial Reporting Standards - normes internationales d’information financière). Gross margin signifie marge brute ; son périmètre doit être examiné avant tout rapprochement.",
      "example": "Atelier Repère, exemple distinct de Noma, en k€ : suivez les calculs posés ci-dessous avant votre application et son micro-transfert.",
      "successFeedback": "300 - 180 = 120 k€. La marge brute d’un groupe industriel ne se confond pas automatiquement avec cette marge commerciale.",
      "conceptCodes": [
        "CONF_GROSS_COMMERCIAL_MARGIN"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "calculation": {
        "expression": "300-180",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 2,
      "formula": "Marge commerciale = ventes de marchandises - coût d’achat des marchandises vendues. Elle concerne l’achat-revente.",
      "notions": [
        {
          "name": "Marge commerciale",
          "question": "Que reste-t-il de l’achat-revente après le coût des marchandises vendues ?",
          "definition": "Solde de l’activité de négoce. Le coût acheté-vendu tient compte du stock initial et du stock final.",
          "formula": {
            "label": "Marge commerciale",
            "expression": "Ventes de marchandises - coût d’achat des marchandises vendues"
          },
          "calculation": [
            {
              "label": "Ventes de marchandises",
              "value": 260,
              "sign": "",
              "result": false
            },
            {
              "label": "Coût acheté-vendu",
              "value": 180,
              "sign": "-",
              "result": false
            },
            {
              "label": "Marge commerciale",
              "value": 80,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Atelier Repère conserve 80 k€ après le coût acheté-vendu, avant les autres consommations et charges.",
          "documentReference": "Dans le tableau Noma : ventes de marchandises, coût acheté-vendu, puis premier sous-total. Ne confondez pas achats et coût des marchandises vendues."
        }
      ],
      "courseRef": "s-commercial-notion",
      "exampleRef": "s-commercial-exemple"
    },
    {
      "id": "s-production",
      "block": "sig",
      "title": "3. Reconnaître la production de l’exercice",
      "type": "number",
      "prompt": "Atelier Noma : production vendue 200, stockée 20, immobilisée 10, en k€. Production de l’exercice ?",
      "expected": 230,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Une machine fabriquée par l’entreprise pour elle-même est achevée en N et n’est pas vendue. Quel classement est cohérent ?",
        "options": [
          {
            "id": "o1",
            "label": "Vente de marchandises dans la marge commerciale",
            "confusion": "Confusion ciblée : Vente de marchandises dans la marge commerciale. À confronter à : La production immobilisée correspond à une production utilisée par l’entreprise elle-même. Elle entre dans la production de l’exercice sans vente à un client ni encaissement."
          },
          {
            "id": "o0",
            "label": "Production immobilisée dans la production de l’exercice",
            "confusion": "Raisonnement attendu : La production immobilisée correspond à une production utilisée par l’entreprise elle-même. Elle entre dans la production de l’exercice sans vente à un client ni encaissement."
          },
          {
            "id": "o2",
            "label": "Produit financier dans le résultat financier",
            "confusion": "Confusion ciblée : Produit financier dans le résultat financier. À confronter à : La production immobilisée correspond à une production utilisée par l’entreprise elle-même. Elle entre dans la production de l’exercice sans vente à un client ni encaissement."
          },
          {
            "id": "o3",
            "label": "Encaissement client dans le chiffre d’affaires",
            "confusion": "Confusion ciblée : Encaissement client dans le chiffre d’affaires. À confronter à : La production immobilisée correspond à une production utilisée par l’entreprise elle-même. Elle entre dans la production de l’exercice sans vente à un client ni encaissement."
          }
        ],
        "expected": "o0",
        "explanation": "La production immobilisée correspond à une production utilisée par l’entreprise elle-même. Elle entre dans la production de l’exercice sans vente à un client ni encaissement.",
        "skill": "Production de l’exercice = production vendue + production stockée + production immobilisée.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_SIG_IFRS",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Toute la production a-t-elle été vendue ?",
        "hint": "Ajoutez production vendue, stockée et immobilisée, avec leur signe.",
        "explanation": "200 + 20 + 10 = 230 k€. La production stockée ou immobilisée n’est pas du chiffre d’affaires encaissé."
      },
      "lesson": "Atelier Noma est un cas mixte du Guide : négoce et production. La production de l’exercice comprend vendue, stockée et immobilisée. Les achats de la période ne sont pas nécessairement le coût acheté-vendu ; les stocks et consommations doivent être rapprochés. Construisez la carte entière sur brouillon, avant d’en saisir les soldes.",
      "example": "Atelier Repère, exemple distinct de Noma, en k€ : suivez les calculs posés ci-dessous avant votre application et son micro-transfert.",
      "successFeedback": "200 + 20 + 10 = 230 k€. La production stockée ou immobilisée n’est pas du chiffre d’affaires encaissé.",
      "conceptCodes": [
        "CONF_SIG_IFRS",
        "CONF_PURCHASES_COGS"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "calculation": {
        "expression": "200+20+10",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 2,
      "formula": "Production de l’exercice = production vendue + production stockée + production immobilisée.",
      "notions": [
        {
          "name": "Production de l’exercice",
          "question": "Toute la production de la période a-t-elle été vendue ?",
          "definition": "Elle comprend la production vendue, la variation de production stockée et la production immobilisée. Une variation stockée négative réduit ce total.",
          "formula": {
            "label": "Production de l’exercice",
            "expression": "Production vendue + production stockée + production immobilisée"
          },
          "calculation": [
            {
              "label": "Production vendue",
              "value": 160,
              "sign": "",
              "result": false
            },
            {
              "label": "Production stockée (variation)",
              "value": -8,
              "sign": "+",
              "result": false
            },
            {
              "label": "Production immobilisée",
              "value": 4,
              "sign": "+",
              "result": false
            },
            {
              "label": "Production de l’exercice",
              "value": 156,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Atelier Repère produit 156 k€. Ce total ne mesure ni les ventes seules ni un encaissement.",
          "documentReference": "Repérez les trois lignes de production et leur sous-total. Le négoce et la production sont distincts dans ce cas mixte."
        }
      ],
      "courseRef": "s-production-notion",
      "exampleRef": "s-production-exemple"
    },
    {
      "id": "s-va",
      "block": "sig",
      "title": "4. La richesse créée après consommations externes",
      "type": "number",
      "prompt": "Atelier Noma : marge commerciale 120, production 230, matières consommées 70, services extérieurs 60, en k€. Valeur ajoutée ?",
      "expected": 220,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Les charges de personnel augmentent de 10 k€, toutes les autres données restant constantes. Quel effet sur VA et EBE ?",
        "options": [
          {
            "id": "o1",
            "label": "VA diminue de 10 ; EBE diminue de 10",
            "confusion": "Confusion ciblée : VA diminue de 10 ; EBE diminue de 10. À confronter à : La VA précède le personnel dans la cascade. L’EBE retranche le personnel : il diminue de 10. La variation ne modifie pas les consommations externes."
          },
          {
            "id": "o2",
            "label": "VA diminue de 10 ; EBE inchangé",
            "confusion": "Confusion ciblée : VA diminue de 10 ; EBE inchangé. À confronter à : La VA précède le personnel dans la cascade. L’EBE retranche le personnel : il diminue de 10. La variation ne modifie pas les consommations externes."
          },
          {
            "id": "o0",
            "label": "VA inchangée ; EBE diminue de 10",
            "confusion": "Raisonnement attendu : La VA précède le personnel dans la cascade. L’EBE retranche le personnel : il diminue de 10. La variation ne modifie pas les consommations externes."
          },
          {
            "id": "o3",
            "label": "VA augmente de 10 ; EBE diminue de 10",
            "confusion": "Confusion ciblée : VA augmente de 10 ; EBE diminue de 10. À confronter à : La VA précède le personnel dans la cascade. L’EBE retranche le personnel : il diminue de 10. La variation ne modifie pas les consommations externes."
          }
        ],
        "expected": "o0",
        "explanation": "La VA précède le personnel dans la cascade. L’EBE retranche le personnel : il diminue de 10. La variation ne modifie pas les consommations externes.",
        "skill": "Valeur ajoutée = marge commerciale + production de l’exercice - consommations de biens et services de tiers.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_VA_REVENUE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelles ressources ont été achetées à l’extérieur pour produire cette richesse ?",
        "hint": "120 + 230 - 70 - 60. Le personnel n’est pas encore retiré à ce niveau.",
        "explanation": "La valeur ajoutée est 220 k€, pas le chiffre d’affaires. Elle mesure ici la richesse créée après consommations externes."
      },
      "lesson": "Valeur ajoutée : que crée l’organisation après les biens et services consommés provenant de tiers ? Elle permet ensuite de comprendre la rémunération des salariés, les taxes et le surplus d’exploitation.",
      "example": "Atelier Repère, exemple distinct de Noma, en k€ : suivez les calculs posés ci-dessous avant votre application et son micro-transfert.",
      "successFeedback": "La valeur ajoutée est 220 k€, pas le chiffre d’affaires. Elle mesure ici la richesse créée après consommations externes.",
      "conceptCodes": [
        "CONF_VA_REVENUE"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "calculation": {
        "expression": "120+230-70-60",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 2.5,
      "formula": "Valeur ajoutée = marge commerciale + production de l’exercice - consommations de biens et services de tiers.",
      "notions": [
        {
          "name": "Valeur ajoutée",
          "question": "Quelle richesse l’organisation crée-t-elle après les consommations provenant de tiers ?",
          "definition": "La valeur ajoutée retire les matières et services externes de la marge commerciale et de la production. Le personnel n’est pas encore retranché.",
          "formula": {
            "label": "Valeur ajoutée",
            "expression": "Marge commerciale + production de l’exercice - consommations externes"
          },
          "calculation": [
            {
              "label": "Marge commerciale",
              "value": 80,
              "sign": "",
              "result": false
            },
            {
              "label": "Production de l’exercice",
              "value": 156,
              "sign": "+",
              "result": false
            },
            {
              "label": "Matières et services externes",
              "value": 100,
              "sign": "-",
              "result": false
            },
            {
              "label": "Valeur ajoutée",
              "value": 136,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Atelier Repère crée 136 k€ après consommations externes. Ce montant servira notamment à rémunérer le travail et à couvrir les taxes d’exploitation.",
          "documentReference": "Repérez les matières et services, puis le sous-total Valeur ajoutée. Retirer ici le personnel ferait sauter un étage."
        }
      ],
      "courseRef": "s-va-notion",
      "exampleRef": "s-va-exemple"
    },
    {
      "id": "s-ebe",
      "block": "sig",
      "title": "5. Du partage de la valeur au surplus d’exploitation",
      "type": "number",
      "prompt": "Atelier Noma : valeur ajoutée 220, subventions 5, taxes d’exploitation 10, personnel 75, en k€. EBE (Excédent brut d’exploitation) ?",
      "expected": 140,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Une nouvelle dotation aux amortissements de 12 k€ apparaît, sans autre variation. Quel effet dans la cascade simplifiée ?",
        "options": [
          {
            "id": "o1",
            "label": "EBE diminue de 12 ; résultat d’exploitation inchangé",
            "confusion": "Confusion ciblée : EBE diminue de 12 ; résultat d’exploitation inchangé. À confronter à : Les dotations viennent après l’EBE. Elles réduisent le résultat d’exploitation sans modifier cet EBE, et sans imposer un paiement simultané."
          },
          {
            "id": "o2",
            "label": "EBE et résultat d’exploitation diminuent de 12",
            "confusion": "Confusion ciblée : EBE et résultat d’exploitation diminuent de 12. À confronter à : Les dotations viennent après l’EBE. Elles réduisent le résultat d’exploitation sans modifier cet EBE, et sans imposer un paiement simultané."
          },
          {
            "id": "o3",
            "label": "EBE augmente de 12 ; résultat d’exploitation diminue de 12",
            "confusion": "Confusion ciblée : EBE augmente de 12 ; résultat d’exploitation diminue de 12. À confronter à : Les dotations viennent après l’EBE. Elles réduisent le résultat d’exploitation sans modifier cet EBE, et sans imposer un paiement simultané."
          },
          {
            "id": "o0",
            "label": "EBE inchangé ; résultat d’exploitation diminue de 12",
            "confusion": "Raisonnement attendu : Les dotations viennent après l’EBE. Elles réduisent le résultat d’exploitation sans modifier cet EBE, et sans imposer un paiement simultané."
          }
        ],
        "expected": "o0",
        "explanation": "Les dotations viennent après l’EBE. Elles réduisent le résultat d’exploitation sans modifier cet EBE, et sans imposer un paiement simultané.",
        "skill": "EBE (Excédent brut d’exploitation) = valeur ajoutée + subventions d’exploitation - taxes d’exploitation - charges de personnel.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_EBE_CASH",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quels postes restent avant les dotations et la finance ?",
        "hint": "Ajoutez les subventions puis retirez taxes d’exploitation et personnel.",
        "explanation": "220 + 5 - 10 - 75 = 140 k€. Ce surplus n’est pas un flux de trésorerie : délais clients, fournisseurs et stocks restent à examiner."
      },
      "lesson": "À comprendre : que reste-t-il de la richesse créée après personnel et taxes d’exploitation, en tenant compte des subventions ? EBE (Excédent brut d’exploitation) : valeur ajoutée + subventions - taxes d’exploitation - personnel, dans le cas simplifié. Ce surplus comptable n’est pas la trésorerie : délais clients/fournisseurs et stocks subsistent. Les dotations à l’usure et aux risques viennent ensuite.",
      "example": "Atelier Repère, exemple distinct de Noma, en k€ : suivez les calculs posés ci-dessous avant votre application et son micro-transfert.",
      "successFeedback": "220 + 5 - 10 - 75 = 140 k€. Ce surplus n’est pas un flux de trésorerie : délais clients, fournisseurs et stocks restent à examiner.",
      "conceptCodes": [
        "CONF_EBE_CASH"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "calculation": {
        "expression": "220+5-10-75",
        "unit": "k€",
        "rounding": null
      },
      "estimatedMinutes": 2.5,
      "formula": "EBE (Excédent brut d’exploitation) = valeur ajoutée + subventions d’exploitation - taxes d’exploitation - charges de personnel.",
      "notions": [
        {
          "name": "EBE (Excédent brut d’exploitation)",
          "question": "Que dégage l’exploitation après le personnel et les taxes, avant les dotations ?",
          "definition": "Surplus comptable brut lié à l’exploitation, tenant compte des subventions. Il ne garantit pas une entrée de trésorerie.",
          "formula": {
            "label": "EBE",
            "expression": "Valeur ajoutée + subventions d’exploitation - impôts et taxes d’exploitation - charges de personnel"
          },
          "calculation": [
            {
              "label": "Valeur ajoutée",
              "value": 136,
              "sign": "",
              "result": false
            },
            {
              "label": "Subventions d’exploitation",
              "value": 4,
              "sign": "+",
              "result": false
            },
            {
              "label": "Taxes d’exploitation",
              "value": 8,
              "sign": "-",
              "result": false
            },
            {
              "label": "Personnel",
              "value": 52,
              "sign": "-",
              "result": false
            },
            {
              "label": "EBE",
              "value": 80,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Atelier Repère dégage 80 k€ avant usure, risques et finance. Les délais clients/fournisseurs et les stocks peuvent différer des paiements.",
          "documentReference": "Dans le tableau, l’EBE précède les dotations. Les taxes d’exploitation se distinguent de l’impôt sur les bénéfices situé plus bas."
        }
      ],
      "courseRef": "s-ebe-notion",
      "exampleRef": "s-ebe-exemple"
    },
    {
      "id": "s-noma-bridge",
      "block": "sig",
      "title": "6. Atelier Noma : reconstruire la fin de la cascade",
      "type": "assessment",
      "prompt": "Atelier Noma, en k€ : EBE (Excédent brut d’exploitation) 140 ; amortissements 18 ; dépréciations/provisions 4 ; autres charges d’exploitation 3 ; produits financiers 1 ; charges financières 7 ; impôt 30. Aucune autre opération, notamment exceptionnelle. Finissez le document sur papier, puis complétez.",
      "questions": [
        {
          "type": "number",
          "prompt": "Résultat d’exploitation ?",
          "expected": 115,
          "tolerance": 0,
          "calculation": {
            "expression": "140-18-4-3",
            "unit": "k€",
            "rounding": null
          },
          "id": "q0",
          "title": "Exploitation"
        },
        {
          "type": "number",
          "prompt": "Résultat courant avant impôts ?",
          "expected": 109,
          "tolerance": 0,
          "calculation": {
            "expression": "140-18-4-3+1-7",
            "unit": "k€",
            "rounding": null
          },
          "id": "q1",
          "title": "RCAI (Résultat courant avant impôts)"
        },
        {
          "type": "number",
          "prompt": "Résultat net ?",
          "expected": 79,
          "tolerance": 0,
          "calculation": {
            "expression": "140-18-4-3+1-7-30",
            "unit": "k€",
            "rounding": null
          },
          "id": "q2",
          "title": "Net"
        }
      ],
      "threshold": 3,
      "transfer": {
        "type": "single",
        "prompt": "Un produit financier supplémentaire de 5 k€ est reconnu, sans autre effet avant impôt. Quelle variation des soldes est correcte ?",
        "options": [
          {
            "id": "o0",
            "label": "Exploitation inchangée ; résultat financier et RCAI +5",
            "confusion": "Raisonnement attendu : La finance est isolée de l’exploitation. RCAI = exploitation + résultat financier : un produit financier supplémentaire augmente ces deux derniers soldes de 5, avant effet fiscal éventuel."
          },
          {
            "id": "o1",
            "label": "Exploitation +5 ; résultat financier inchangé",
            "confusion": "Confusion ciblée : Exploitation +5 ; résultat financier inchangé. À confronter à : La finance est isolée de l’exploitation. RCAI = exploitation + résultat financier : un produit financier supplémentaire augmente ces deux derniers soldes de 5, avant effet fiscal éventuel."
          },
          {
            "id": "o2",
            "label": "EBE +5 ; RCAI inchangé",
            "confusion": "Confusion ciblée : EBE +5 ; RCAI inchangé. À confronter à : La finance est isolée de l’exploitation. RCAI = exploitation + résultat financier : un produit financier supplémentaire augmente ces deux derniers soldes de 5, avant effet fiscal éventuel."
          },
          {
            "id": "o3",
            "label": "Résultat financier -5 ; RCAI -5",
            "confusion": "Confusion ciblée : Résultat financier -5 ; RCAI -5. À confronter à : La finance est isolée de l’exploitation. RCAI = exploitation + résultat financier : un produit financier supplémentaire augmente ces deux derniers soldes de 5, avant effet fiscal éventuel."
          }
        ],
        "expected": "o0",
        "explanation": "La finance est isolée de l’exploitation. RCAI = exploitation + résultat financier : un produit financier supplémentaire augmente ces deux derniers soldes de 5, avant effet fiscal éventuel.",
        "skill": "Rappel dans Noma : exploitation = surplus brut - dotations - autres charges ; RCAI (Résultat courant avant impôts) = exploitation + produits financiers - charges financières ; net = résultat courant - impôt.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_RCAI_IFRS",
      "conceptCodes": [
        "CONF_RCAI_IFRS"
      ],
      "lesson": "À comprendre : l’usure et les risques, puis la finance et l’impôt, répondent à des questions différentes. Dans les données simplifiées de Noma, le RCAI (Résultat courant avant impôts) est exploitation + finance. Il ne devient pas une ligne universelle obligatoire des comptes internationaux. Ne reconstituez pas ces SIG (Soldes intermédiaires de gestion) à partir d’intitulés LVMH (Louis Vuitton Moët Hennessy) supposés équivalents. Repères utiles : SIG (Soldes intermédiaires de gestion). L’amortissement répartit le coût d’un actif sur son usage ; la dépréciation constate une perte de valeur ; une provision estime un passif. Une provision ne signifie pas que du cash est bloqué en banque.",
      "example": "Atelier Repère, exemple distinct de Noma, en k€ : suivez les calculs posés ci-dessous avant votre application et son micro-transfert.",
      "successFeedback": "Noma : exploitation 115, finance -6, RCAI (Résultat courant avant impôts) 109, résultat net 79 k€. Les dotations et les autres charges sont retirées une fois, avant finance et impôt.",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quelle famille d’éléments explique le passage d’un niveau au suivant ?",
        "hint": "Retirez d’abord dotations et autres charges d’exploitation ; ajoutez le résultat financier, puis retirez l’impôt.",
        "explanation": "Noma : exploitation 115, finance -6, RCAI (Résultat courant avant impôts) 109, résultat net 79 k€. Les dotations et les autres charges sont retirées une fois, avant finance et impôt."
      },
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "estimatedMinutes": 4,
      "formula": "Rappel dans Noma : exploitation = surplus brut - dotations - autres charges ; RCAI (Résultat courant avant impôts) = exploitation + produits financiers - charges financières ; net = résultat courant - impôt.",
      "notions": [
        {
          "name": "Résultat d’exploitation",
          "question": "Quel résultat subsiste après l’usure et les risques de l’activité ?",
          "definition": "Dans notre cas simplifié, sans reprises ni autres produits : l’EBE est diminué des amortissements, dépréciations/provisions et autres charges d’exploitation.",
          "formula": {
            "label": "Résultat d’exploitation",
            "expression": "EBE - dotations aux amortissements - dépréciations/provisions - autres charges d’exploitation"
          },
          "calculation": [
            {
              "label": "EBE",
              "value": 80,
              "sign": "",
              "result": false
            },
            {
              "label": "Amortissements",
              "value": 12,
              "sign": "-",
              "result": false
            },
            {
              "label": "Dépréciations/provisions",
              "value": 3,
              "sign": "-",
              "result": false
            },
            {
              "label": "Autres charges d’exploitation",
              "value": 2,
              "sign": "-",
              "result": false
            },
            {
              "label": "Résultat d’exploitation",
              "value": 63,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Les 63 k€ d’Atelier Repère intègrent les charges d’usure et de risque. Une dotation ne signifie pas un nouveau paiement.",
          "documentReference": "Repérez les dotations et autres charges après l’EBE, puis le résultat d’exploitation."
        },
        {
          "name": "Résultat financier",
          "question": "Comment le financement et les placements contribuent-ils au résultat ?",
          "definition": "Différence entre produits financiers et charges financières. Ce solde se calcule indépendamment du résultat d’exploitation.",
          "formula": {
            "label": "Résultat financier",
            "expression": "Produits financiers - charges financières"
          },
          "calculation": [
            {
              "label": "Produits financiers",
              "value": 2,
              "sign": "",
              "result": false
            },
            {
              "label": "Charges financières",
              "value": 8,
              "sign": "-",
              "result": false
            },
            {
              "label": "Résultat financier",
              "value": -6,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Le financement réduit ici le résultat de 6 k€. Le capital d’un emprunt reçu n’est pas un produit financier.",
          "documentReference": "Repérez les produits et charges financiers, puis leur solde. Ce -6 s’ajoute ensuite au résultat d’exploitation."
        },
        {
          "name": "RCAI (Résultat courant avant impôts)",
          "question": "Que produit l’activité courante après sa composante financière ?",
          "definition": "Dans cette grille française : résultat d’exploitation augmenté du résultat financier. Le résultat exceptionnel éventuel est distinct et absent de nos cas.",
          "formula": {
            "label": "RCAI",
            "expression": "Résultat d’exploitation + résultat financier"
          },
          "calculation": [
            {
              "label": "Résultat d’exploitation",
              "value": 63,
              "sign": "",
              "result": false
            },
            {
              "label": "Résultat financier",
              "value": -6,
              "sign": "+",
              "result": false
            },
            {
              "label": "RCAI",
              "value": 57,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Le RCAI d’Atelier Repère est 57 k€. Ajouter un résultat financier négatif diminue le résultat. Le RCAI n’est pas un libellé IFRS universel.",
          "documentReference": "Repérez le RCAI sous les deux composantes exploitation et finance."
        },
        {
          "name": "Résultat net",
          "question": "Que reste-t-il après l’impôt sur les bénéfices dans ce cas ?",
          "definition": "Dans nos cas sans exceptionnel ni participation : RCAI diminué de l’impôt sur les bénéfices. Ne généralisez pas cette chaîne simplifiée à un dossier comportant d’autres éléments.",
          "formula": {
            "label": "Résultat net (cas simplifié)",
            "expression": "RCAI - impôt sur les bénéfices"
          },
          "calculation": [
            {
              "label": "RCAI",
              "value": 57,
              "sign": "",
              "result": false
            },
            {
              "label": "Impôt sur les bénéfices",
              "value": 17,
              "sign": "-",
              "result": false
            },
            {
              "label": "Résultat net",
              "value": 40,
              "sign": "=",
              "result": true
            }
          ],
          "interpretation": "Les 40 k€ de résultat net d’Atelier Repère mesurent un bénéfice comptable, pas un solde de banque ou un dividende automatique.",
          "documentReference": "Repérez l’impôt puis la dernière ligne du tableau. Reconstruisez maintenant la cascade complète de Noma sur brouillon."
        }
      ],
      "courseRef": "s-noma-bridge-notion",
      "exampleRef": "s-noma-bridge-exemple"
    },
    {
      "id": "s-vocabulary",
      "block": "sig",
      "title": "7. Éviter les fausses équivalences",
      "type": "multiple",
      "prompt": "Quelles précautions sont nécessaires ?",
      "options": [
        {
          "id": "o0",
          "label": "Un EBE positif ne démontre pas un encaissement équivalent",
          "confusion": "Raisonnement attendu : La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique."
        },
        {
          "id": "o1",
          "label": "Un EBITDA comparable exige de vérifier ses ajustements",
          "confusion": "Raisonnement attendu : La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique."
        },
        {
          "id": "o2",
          "label": "Un RCAI français constitue le sous-total obligatoire en IFRS",
          "confusion": "Confusion ciblée : Un RCAI français constitue le sous-total obligatoire en IFRS. À confronter à : La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique."
        },
        {
          "id": "o3",
          "label": "Une Gross margin publiée constitue la marge commerciale",
          "confusion": "Confusion ciblée : Une Gross margin publiée constitue la marge commerciale. À confronter à : La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique."
        }
      ],
      "expected": [
        "o0",
        "o1"
      ],
      "transfer": {
        "type": "single",
        "prompt": "Deux sociétés publient un EBITDA mais l’une exclut des coûts de restructuration. Quelle comparaison est défendable ?",
        "options": [
          {
            "id": "o1",
            "label": "Comparer directement les montants car le sigle est identique",
            "confusion": "Confusion ciblée : Comparer directement les montants car le sigle est identique. À confronter à : EBITDA n’a pas une définition uniforme permettant d’ignorer les ajustements. La comparaison exige une réconciliation explicite, sans assimiler EBITDA et EBE."
          },
          {
            "id": "o0",
            "label": "Rapprocher les définitions et retraiter les différences documentées",
            "confusion": "Raisonnement attendu : EBITDA n’a pas une définition uniforme permettant d’ignorer les ajustements. La comparaison exige une réconciliation explicite, sans assimiler EBITDA et EBE."
          },
          {
            "id": "o2",
            "label": "Remplacer les deux montants par l’EBE sans réconciliation",
            "confusion": "Confusion ciblée : Remplacer les deux montants par l’EBE sans réconciliation. À confronter à : EBITDA n’a pas une définition uniforme permettant d’ignorer les ajustements. La comparaison exige une réconciliation explicite, sans assimiler EBITDA et EBE."
          },
          {
            "id": "o3",
            "label": "Comparer les montants au cash bancaire sans retraitement",
            "confusion": "Confusion ciblée : Comparer les montants au cash bancaire sans retraitement. À confronter à : EBITDA n’a pas une définition uniforme permettant d’ignorer les ajustements. La comparaison exige une réconciliation explicite, sans assimiler EBITDA et EBE."
          }
        ],
        "expected": "o0",
        "explanation": "EBITDA n’a pas une définition uniforme permettant d’ignorer les ajustements. La comparaison exige une réconciliation explicite, sans assimiler EBITDA et EBE.",
        "skill": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_EBE_EBITDA",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Un même mot garantit-il le même périmètre ?",
        "hint": "Lisez les définitions et le rapprochement avec les états financiers.",
        "explanation": "La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique."
      },
      "lesson": "À retenir : SIG (Soldes intermédiaires de gestion) français et présentations internationales se rapprochent par leur sens économique, pas par une égalité automatique des noms. EBE (Excédent brut d’exploitation) n’est ni du cash ni une identité automatique avec EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements). Lisez la définition et les ajustements d’un indicateur avant de comparer. Repères : EBE = Excédent brut d’exploitation ; EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization (résultat avant intérêts, impôts, dépréciations et amortissements) ; RCAI = Résultat courant avant impôts ; IFRS = International Financial Reporting Standards (normes internationales d’information financière).",
      "example": "Exemple : ventes de marchandises 160, coût vendu 100 : marge 60. Taux de marge = 60 / 100 × 100 = 60 % ; taux de marque = 60 / 160 × 100 = 37,5 %. Le dénominateur répond à la question économique.",
      "successFeedback": "La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique.",
      "conceptCodes": [
        "CONF_EBE_EBITDA"
      ],
      "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "estimatedMinutes": 3,
      "skill": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
      "difficulty": "application",
      "courseRef": "s-vocabulary-notion",
      "exampleRef": "s-vocabulary-exemple"
    },
    {
      "id": "l-locate",
      "block": "real-case",
      "title": "1. Lire un document authentique",
      "type": "classification",
      "prompt": "Ouvrez l’extrait officiel 2025 ci-dessus. Identifiez les lignes, sans commencer par calculer.",
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2",
        "i3": "g3",
        "i4": "g4",
        "i5": "g5",
        "i6": "g6"
      },
      "transfer": {
        "type": "single",
        "prompt": "Le document présente deux années en millions d’euros. Avant de reporter une valeur dans une note en milliards, que faut-il contrôler ?",
        "options": [
          {
            "id": "o1",
            "label": "L’année seulement, car M€ et Md€ sont interchangeables",
            "confusion": "Confusion ciblée : L’année seulement, car M€ et Md€ sont interchangeables. À confronter à : 1 Md€ = 1 000 M€. Le repérage exige année, périmètre, ligne et unité ; 80 807 M€ = 80,807 Md€."
          },
          {
            "id": "o2",
            "label": "Le libellé seulement, en multipliant les M€ par 1 000",
            "confusion": "Confusion ciblée : Le libellé seulement, en multipliant les M€ par 1 000. À confronter à : 1 Md€ = 1 000 M€. Le repérage exige année, périmètre, ligne et unité ; 80 807 M€ = 80,807 Md€."
          },
          {
            "id": "o0",
            "label": "L’année, le libellé et la conversion en divisant les M€ par 1 000",
            "confusion": "Raisonnement attendu : 1 Md€ = 1 000 M€. Le repérage exige année, périmètre, ligne et unité ; 80 807 M€ = 80,807 Md€."
          },
          {
            "id": "o3",
            "label": "L’année et le libellé, sans convertir l’unité",
            "confusion": "Confusion ciblée : L’année et le libellé, sans convertir l’unité. À confronter à : 1 Md€ = 1 000 M€. Le repérage exige année, périmètre, ligne et unité ; 80 807 M€ = 80,807 Md€."
          }
        ],
        "expected": "o0",
        "explanation": "1 Md€ = 1 000 M€. Le repérage exige année, périmètre, ligne et unité ; 80 807 M€ = 80,807 Md€.",
        "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_AMOUNT_RATE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
        "hint": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
        "explanation": "La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
      },
      "lesson": "Méthode du document : lisez d’abord le titre, le périmètre consolidé, l’unité, les années et les sous-totaux. Repérez six lignes dans l’extrait : ventes, coût des ventes, marge brute, résultat opérationnel, impôts et résultat part du groupe. Les libellés originaux sont conservés dans le tableau bilingue.",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française.",
      "items": [
        {
          "id": "i0",
          "label": "Revenue"
        },
        {
          "id": "i1",
          "label": "Cost of sales"
        },
        {
          "id": "i2",
          "label": "Gross margin"
        },
        {
          "id": "i3",
          "label": "Profit from recurring operations"
        },
        {
          "id": "i4",
          "label": "Operating profit"
        },
        {
          "id": "i5",
          "label": "Net profit before minority interests"
        },
        {
          "id": "i6",
          "label": "Net profit, Group share"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Chiffre d’affaires"
        },
        {
          "id": "g1",
          "label": "Coût des ventes"
        },
        {
          "id": "g2",
          "label": "Marge brute publiée"
        },
        {
          "id": "g3",
          "label": "Résultat opérationnel courant"
        },
        {
          "id": "g4",
          "label": "Résultat opérationnel après autres éléments"
        },
        {
          "id": "g5",
          "label": "Résultat net avant minoritaires"
        },
        {
          "id": "g6",
          "label": "Résultat net attribuable au Groupe"
        }
      ],
      "conceptCodes": [
        "CONF_AMOUNT_RATE"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 4,
      "itemFeedback": {
        "i0": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Revenue : Chiffre d’affaires. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i1": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Cost of sales : Coût des ventes. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i2": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Gross margin : Marge brute publiée. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i3": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Profit from recurring operations : Résultat opérationnel courant. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i4": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Operating profit : Résultat opérationnel après autres éléments. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i5": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Net profit before minority interests : Résultat net avant minoritaires. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        },
        "i6": {
          "hint": "Avez-vous lu le titre, l’unité et la colonne de l’année ?",
          "confusion": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
          "explanation": "Net profit, Group share : Résultat net attribuable au Groupe. La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française."
        }
      },
      "courseRef": "l-locate-notion",
      "exampleRef": "l-locate-exemple"
    },
    {
      "id": "l-reconstruct",
      "block": "real-case",
      "title": "2. Reconstituer le niveau opérationnel courant",
      "type": "assessment",
      "prompt": "À partir des lignes LVMH (Louis Vuitton Moët Hennessy) 2025, reconstruisez les deux niveaux ; notez les noms et signes des lignes sur brouillon.",
      "transfer": {
        "type": "single",
        "prompt": "Dans la présentation LVMH, la contribution des associés passe de +75 à -25 M€, les autres lignes restant identiques. Quel effet sur le résultat opérationnel courant ?",
        "options": [
          {
            "id": "o1",
            "label": "Il diminue de 25 M€",
            "confusion": "Confusion ciblée : Il diminue de 25 M€. À confronter à : Variation = -25 - 75 = -100 M€. Cette ligne s’ajoute avec son signe au sous-total ; passer d’un apport positif à un apport négatif réduit le résultat de 100."
          },
          {
            "id": "o2",
            "label": "Il augmente de 50 M€",
            "confusion": "Confusion ciblée : Il augmente de 50 M€. À confronter à : Variation = -25 - 75 = -100 M€. Cette ligne s’ajoute avec son signe au sous-total ; passer d’un apport positif à un apport négatif réduit le résultat de 100."
          },
          {
            "id": "o3",
            "label": "Il reste identique",
            "confusion": "Confusion ciblée : Il reste identique. À confronter à : Variation = -25 - 75 = -100 M€. Cette ligne s’ajoute avec son signe au sous-total ; passer d’un apport positif à un apport négatif réduit le résultat de 100."
          },
          {
            "id": "o0",
            "label": "Il diminue de 100 M€",
            "confusion": "Raisonnement attendu : Variation = -25 - 75 = -100 M€. Cette ligne s’ajoute avec son signe au sous-total ; passer d’un apport positif à un apport négatif réduit le résultat de 100."
          }
        ],
        "expected": "o0",
        "explanation": "Variation = -25 - 75 = -100 M€. Cette ligne s’ajoute avec son signe au sous-total ; passer d’un apport positif à un apport négatif réduit le résultat de 100.",
        "skill": "Rappel : ventes + coût des ventes signé = marge brute ; marge brute + frais commerciaux signés + frais administratifs signés + résultat des coentreprises = résultat opérationnel courant dans ce document.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_OPERATING_EBIT",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quels postes se trouvent entre marge brute et résultat courant ?",
        "hint": "Respectez les signes : les associés apportent ici +75.",
        "explanation": "80 807 - 27 279 = 53 528 M€ ; 53 528 - 29 914 - 5 934 + 75 = 17 755 M€. Le premier solde précède les autres charges opérationnelles ; le second suit leur périmètre publié."
      },
      "lesson": "Reconstruction : expliquez chaque signe et vérifiez le sous-total contre le document. Le revenu des coentreprises et associés est ajouté ici conformément à la présentation publiée. Ne le réaffectez pas arbitrairement à une autre ligne. Comparez la question économique de la marge brute et celle du résultat opérationnel courant.",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "80 807 - 27 279 = 53 528 M€ ; 53 528 - 29 914 - 5 934 + 75 = 17 755 M€. Le premier solde précède les autres charges opérationnelles ; le second suit leur périmètre publié.",
      "questions": [
        {
          "type": "number",
          "prompt": "Revenue 80 807 M€ ; Cost of sales -27 279 M€. Gross margin (marge brute), en M€ ?",
          "expected": 53528,
          "tolerance": 0,
          "calculation": {
            "expression": "80807-27279",
            "unit": "M€",
            "rounding": null
          },
          "id": "q0",
          "title": "Marge brute"
        },
        {
          "type": "number",
          "prompt": "Gross margin 53 528 ; frais commerciaux -29 914 ; frais généraux -5 934 ; associés +75. Profit from recurring operations (résultat opérationnel courant), en M€ ?",
          "expected": 17755,
          "tolerance": 0,
          "calculation": {
            "expression": "53528-29914-5934+75",
            "unit": "M€",
            "rounding": null
          },
          "id": "q1",
          "title": "Courant"
        }
      ],
      "threshold": 2,
      "conceptCodes": [
        "CONF_OPERATING_EBIT"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 4,
      "formula": "Rappel : ventes + coût des ventes signé = marge brute ; marge brute + frais commerciaux signés + frais administratifs signés + résultat des coentreprises = résultat opérationnel courant dans ce document.",
      "courseRef": "l-reconstruct-notion",
      "exampleRef": "l-reconstruct-exemple"
    },
    {
      "id": "l-pretax",
      "block": "real-case",
      "title": "3. Du courant au résultat avant impôt",
      "type": "number",
      "prompt": "LVMH (Louis Vuitton Moët Hennessy) : résultat opérationnel courant 17 755 ; autres éléments opérationnels -656 ; finance nette -401. Résultat avant impôt en M€ ?",
      "expected": 16698,
      "tolerance": 0,
      "transfer": {
        "type": "single",
        "prompt": "Le résultat financier net passe de -401 à -300 M€, exploitation inchangée. Quel effet sur le résultat avant impôt ?",
        "options": [
          {
            "id": "o0",
            "label": "Il augmente de 101 M€",
            "confusion": "Raisonnement attendu : Une charge nette moins négative améliore le solde : -300 - (-401) = +101 M€. Cela ne démontre pas la cause du changement financier."
          },
          {
            "id": "o1",
            "label": "Il diminue de 101 M€",
            "confusion": "Confusion ciblée : Il diminue de 101 M€. À confronter à : Une charge nette moins négative améliore le solde : -300 - (-401) = +101 M€. Cela ne démontre pas la cause du changement financier."
          },
          {
            "id": "o2",
            "label": "Il augmente de 300 M€",
            "confusion": "Confusion ciblée : Il augmente de 300 M€. À confronter à : Une charge nette moins négative améliore le solde : -300 - (-401) = +101 M€. Cela ne démontre pas la cause du changement financier."
          },
          {
            "id": "o3",
            "label": "Il reste identique",
            "confusion": "Confusion ciblée : Il reste identique. À confronter à : Une charge nette moins négative améliore le solde : -300 - (-401) = +101 M€. Cela ne démontre pas la cause du changement financier."
          }
        ],
        "expected": "o0",
        "explanation": "Une charge nette moins négative améliore le solde : -300 - (-401) = +101 M€. Cela ne démontre pas la cause du changement financier.",
        "skill": "Rappel : opérationnel courant + autres éléments opérationnels signés = opérationnel ; opérationnel + résultat financier net signé = avant impôt reconstruit.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_EBIT_PRETAX",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Combien d’étapes séparent le courant de l’avant impôt ?",
        "hint": "17 755 - 656 = 17 099 ; puis retirez 401.",
        "explanation": "Le résultat opérationnel est 17 099 M€. Le résultat avant impôt reconstruit est 16 698 M€ ; il n’est pas une ligne explicite du tableau original mais un calcul pédagogique identifié."
      },
      "lesson": "Distinguez deux opérations de lecture : passer du résultat opérationnel courant au résultat opérationnel publié, puis intégrer le résultat financier net. La ligne avant impôt est un sous-total reconstruit pour cet exercice ; elle n’est pas rebaptisée EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) ou RCAI (Résultat courant avant impôts) par ressemblance. Repères utiles : EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) ; RCAI (Résultat courant avant impôts).",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "Le résultat opérationnel est 17 099 M€. Le résultat avant impôt reconstruit est 16 698 M€ ; il n’est pas une ligne explicite du tableau original mais un calcul pédagogique identifié.",
      "conceptCodes": [
        "CONF_EBIT_PRETAX"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "calculation": {
        "expression": "17755-656-401",
        "unit": "M€",
        "rounding": null
      },
      "estimatedMinutes": 3,
      "formula": "Rappel : opérationnel courant + autres éléments opérationnels signés = opérationnel ; opérationnel + résultat financier net signé = avant impôt reconstruit.",
      "courseRef": "l-pretax-notion",
      "exampleRef": "l-pretax-exemple"
    },
    {
      "id": "l-group",
      "block": "real-case",
      "title": "4. Identifier le bénéfice attribuable",
      "type": "assessment",
      "prompt": "LVMH (Louis Vuitton Moët Hennessy) 2025, M€ : résultat avant impôt reconstruit 16 698 ; Income taxes -5 476 ; Minority interests -344. Distinguez les deux niveaux.",
      "transfer": {
        "type": "single",
        "prompt": "Un groupe conserve 1 000 de bénéfice consolidé avant minoritaires. La part des minoritaires passe de 40 à 70. Quelle évolution de la part du Groupe ?",
        "options": [
          {
            "id": "o1",
            "label": "De 960 à 1 030, par produit opérationnel",
            "confusion": "Confusion ciblée : De 960 à 1 030, par produit opérationnel. À confronter à : Part du Groupe = bénéfice avant minoritaires - part des minoritaires : 1 000 - 40 = 960, puis 1 000 - 70 = 930. C’est une attribution, pas une nouvelle charge d’activité."
          },
          {
            "id": "o0",
            "label": "De 960 à 930, sans nouvelle charge opérationnelle",
            "confusion": "Raisonnement attendu : Part du Groupe = bénéfice avant minoritaires - part des minoritaires : 1 000 - 40 = 960, puis 1 000 - 70 = 930. C’est une attribution, pas une nouvelle charge d’activité."
          },
          {
            "id": "o2",
            "label": "De 1 000 à 970, par dividende distribué",
            "confusion": "Confusion ciblée : De 1 000 à 970, par dividende distribué. À confronter à : Part du Groupe = bénéfice avant minoritaires - part des minoritaires : 1 000 - 40 = 960, puis 1 000 - 70 = 930. C’est une attribution, pas une nouvelle charge d’activité."
          },
          {
            "id": "o3",
            "label": "De 1 040 à 1 070, par produit financier",
            "confusion": "Confusion ciblée : De 1 040 à 1 070, par produit financier. À confronter à : Part du Groupe = bénéfice avant minoritaires - part des minoritaires : 1 000 - 40 = 960, puis 1 000 - 70 = 930. C’est une attribution, pas une nouvelle charge d’activité."
          }
        ],
        "expected": "o0",
        "explanation": "Part du Groupe = bénéfice avant minoritaires - part des minoritaires : 1 000 - 40 = 960, puis 1 000 - 70 = 930. C’est une attribution, pas une nouvelle charge d’activité.",
        "skill": "Rappel : avant impôt + impôts signés = net consolidé ; net consolidé - part des autres détenteurs = résultat net part du Groupe.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_NET_GROUP_SHARE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "À qui est attribué le bénéfice après impôt ?",
        "hint": "16 698 - 5 476 = 11 222, puis retirez 344.",
        "explanation": "16 698 - 5 476 = 11 222 M€ avant minoritaires ; 11 222 - 344 = 10 878 M€ attribuables au Groupe. La part du Groupe n’est pas un dividende et le bénéfice n’est pas le cash."
      },
      "lesson": "À comprendre : à qui le bénéfice consolidé est-il attribuable ? La part des autres détenteurs des filiales doit être distinguée de celle attribuable au Groupe. Il s’agit d’une attribution du résultat consolidé, pas d’une nouvelle charge opérationnelle ni d’un dividende distribué.",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "16 698 - 5 476 = 11 222 M€ avant minoritaires ; 11 222 - 344 = 10 878 M€ attribuables au Groupe. La part du Groupe n’est pas un dividende et le bénéfice n’est pas le cash.",
      "questions": [
        {
          "type": "number",
          "prompt": "Net profit before minority interests (résultat net avant minoritaires), M€ ?",
          "expected": 11222,
          "tolerance": 0,
          "calculation": {
            "expression": "16698-5476",
            "unit": "M€",
            "rounding": null
          },
          "id": "q0",
          "title": "Avant minoritaires"
        },
        {
          "type": "number",
          "prompt": "Net profit, Group share (résultat net part du Groupe), M€ ?",
          "expected": 10878,
          "tolerance": 0,
          "calculation": {
            "expression": "16698-5476-344",
            "unit": "M€",
            "rounding": null
          },
          "id": "q1",
          "title": "Part du Groupe"
        }
      ],
      "threshold": 2,
      "conceptCodes": [
        "CONF_NET_GROUP_SHARE"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 3,
      "formula": "Rappel : avant impôt + impôts signés = net consolidé ; net consolidé - part des autres détenteurs = résultat net part du Groupe.",
      "courseRef": "l-group-notion",
      "exampleRef": "l-group-exemple"
    },
    {
      "id": "l-compare",
      "block": "real-case",
      "title": "5. Qualifier le taux calculé",
      "type": "number",
      "prompt": "LVMH (Louis Vuitton Moët Hennessy) 2025 : résultat opérationnel courant 17 755 M€, chiffre d’affaires 80 807 M€. Marge opérationnelle courante en pourcentage, arrondie à un dixième ?",
      "expected": 22,
      "tolerance": 0.05,
      "transfer": {
        "type": "single",
        "prompt": "Une note appelle « marge opérationnelle courante » le ratio Net profit, Group share / Revenue. Quel contrôle corrige l’intitulé ?",
        "options": [
          {
            "id": "o1",
            "label": "Le dénominateur doit être remplacé par les minoritaires",
            "confusion": "Confusion ciblée : Le dénominateur doit être remplacé par les minoritaires. À confronter à : Le nom du taux suit le niveau du résultat au numérateur. Une marge opérationnelle courante utilise Profit from recurring operations ; la part du Groupe est un autre étage."
          },
          {
            "id": "o2",
            "label": "La marge courante utilise toujours la part du Groupe",
            "confusion": "Confusion ciblée : La marge courante utilise toujours la part du Groupe. À confronter à : Le nom du taux suit le niveau du résultat au numérateur. Une marge opérationnelle courante utilise Profit from recurring operations ; la part du Groupe est un autre étage."
          },
          {
            "id": "o0",
            "label": "Le numérateur est un résultat net ; il faut renommer le taux",
            "confusion": "Raisonnement attendu : Le nom du taux suit le niveau du résultat au numérateur. Une marge opérationnelle courante utilise Profit from recurring operations ; la part du Groupe est un autre étage."
          },
          {
            "id": "o3",
            "label": "Le ratio doit être multiplié par les ventes plutôt que divisé",
            "confusion": "Confusion ciblée : Le ratio doit être multiplié par les ventes plutôt que divisé. À confronter à : Le nom du taux suit le niveau du résultat au numérateur. Une marge opérationnelle courante utilise Profit from recurring operations ; la part du Groupe est un autre étage."
          }
        ],
        "expected": "o0",
        "explanation": "Le nom du taux suit le niveau du résultat au numérateur. Une marge opérationnelle courante utilise Profit from recurring operations ; la part du Groupe est un autre étage.",
        "skill": "Rappel : marge du niveau demandé = résultat de ce niveau / chiffre d’affaires × 100. Chaque taux dépend du numérateur choisi.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_MARGIN_TYPE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Quel sous-total est retenu pour cette marge ?",
        "hint": "Utilisez le courant 17 755, pas le résultat net part du groupe.",
        "explanation": "17 755 / 80 807 × 100 = environ 22,0 %. C’est la marge opérationnelle courante, pas un taux de marge commerciale SIG (Soldes intermédiaires de gestion) ni une marge nette. Le seul taux ne permet pas de déclarer le Groupe bon ou mauvais."
      },
      "lesson": "Interpréter : nommez le numérateur et le dénominateur avant le pourcentage. Reliez ensuite ce taux aux frais commerciaux, aux coûts et au périmètre observé. Une explication plausible demande des informations complémentaires ; un ratio n’est pas une causalité. Repères utiles : SIG (Soldes intermédiaires de gestion).",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "17 755 / 80 807 × 100 = environ 22,0 %. C’est la marge opérationnelle courante, pas un taux de marge commerciale SIG (Soldes intermédiaires de gestion) ni une marge nette. Le seul taux ne permet pas de déclarer le Groupe bon ou mauvais.",
      "conceptCodes": [
        "CONF_MARGIN_TYPE"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "calculation": {
        "expression": "17755/80807*100",
        "unit": "%",
        "rounding": 1
      },
      "estimatedMinutes": 3,
      "formula": "Rappel : marge du niveau demandé = résultat de ce niveau / chiffre d’affaires × 100. Chaque taux dépend du numérateur choisi.",
      "visualFormulas": [
        {
          "label": "Marge opérationnelle courante",
          "numerator": "Résultat opérationnel courant",
          "denominator": "Chiffre d’affaires",
          "multiplier": "× 100"
        }
      ],
      "courseRef": "l-compare-notion",
      "exampleRef": "l-compare-exemple"
    },
    {
      "id": "l-note",
      "block": "real-case",
      "title": "6. Mission analyste : rédiger une analyse prudente",
      "type": "reflection",
      "prompt": "LVMH (Louis Vuitton Moët Hennessy) 2025 seulement : rédigez 120 à 1 000 caractères. Citez deux observations chiffrées avec leur unité et leur périmètre ; formulez une hypothèse prudente sur la formation du résultat ; nommez l’information permettant de la tester avant une décision. Aucune donnée personnelle.",
      "minLength": 120,
      "criteria": [
        {
          "id": "observation",
          "label": "Je distingue une donnée observée de son explication possible."
        },
        {
          "id": "hypothesis",
          "label": "Je formule une hypothèse conditionnelle, sans la présenter comme certaine."
        },
        {
          "id": "verification",
          "label": "Je précise une information vérifiable avant une décision."
        }
      ],
      "model": "LVMH (Louis Vuitton Moët Hennessy) publie 80 807 M€ de chiffre d’affaires et 53 528 M€ de marge brute. Le résultat opérationnel courant atteint 17 755 M€, soit environ 22,0 % des ventes ; le résultat net part du Groupe est 10 878 M€. Le poids des frais commerciaux pourrait notamment refléter le réseau et les investissements de marque. Vérifier leur ventilation, le mix des activités et les effets de périmètre avant de proposer une réduction des dépenses.",
      "transfer": {
        "type": "single",
        "prompt": "Une entreprise veut réduire ses frais commerciaux après lecture d’un montant élevé. Quelle information départage « dépenses inefficaces » et « soutien aux ventes » ?",
        "options": [
          {
            "id": "o1",
            "label": "Le montant total des frais repris sans détail",
            "confusion": "Confusion ciblée : Le montant total des frais repris sans détail. À confronter à : La ventilation et les effets permettent de tester l’hypothèse d’inefficacité. Un montant élevé seul ne justifie pas la suppression des dépenses."
          },
          {
            "id": "o2",
            "label": "Le nombre d’actions utilisé pour le bénéfice par action",
            "confusion": "Confusion ciblée : Le nombre d’actions utilisé pour le bénéfice par action. À confronter à : La ventilation et les effets permettent de tester l’hypothèse d’inefficacité. Un montant élevé seul ne justifie pas la suppression des dépenses."
          },
          {
            "id": "o3",
            "label": "Le niveau des minoritaires sans données commerciales",
            "confusion": "Confusion ciblée : Le niveau des minoritaires sans données commerciales. À confronter à : La ventilation et les effets permettent de tester l’hypothèse d’inefficacité. Un montant élevé seul ne justifie pas la suppression des dépenses."
          },
          {
            "id": "o0",
            "label": "Ventilation des dépenses, objectifs et résultats par activité",
            "confusion": "Raisonnement attendu : La ventilation et les effets permettent de tester l’hypothèse d’inefficacité. Un montant élevé seul ne justifie pas la suppression des dépenses."
          }
        ],
        "expected": "o0",
        "explanation": "La ventilation et les effets permettent de tester l’hypothèse d’inefficacité. Un montant élevé seul ne justifie pas la suppression des dépenses.",
        "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_HYPOTHESIS_CONCLUSION",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Votre recommandation dépend-elle d’une hypothèse encore à tester ?",
        "hint": "Citez deux comparaisons, une cause possible et une donnée discriminante.",
        "explanation": "Une note responsable sépare performance observée et explication. Le modèle ne remplace pas une enquête sur les causes."
      },
      "lesson": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "Une note responsable sépare performance observée et explication. Le modèle ne remplace pas une enquête sur les causes.",
      "conceptCodes": [
        "CONF_HYPOTHESIS_CONCLUSION"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 5,
      "writingGuide": {
        "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
        "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
        "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
        "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
        "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
        "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
        "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
      },
      "courseRef": "l-note-notion",
      "exampleRef": "l-note-exemple"
    },
    {
      "id": "l-boundaries",
      "block": "real-case",
      "title": "7. Quatre objets à ne pas confondre",
      "type": "classification",
      "prompt": "Associez les définitions sans calculer de flux.",
      "items": [
        {
          "id": "i0",
          "label": "Performance comptable finale"
        },
        {
          "id": "i1",
          "label": "Ressources internes potentielles par retraitements comptables français"
        },
        {
          "id": "i2",
          "label": "Mouvements réels de cash sur une période"
        },
        {
          "id": "i3",
          "label": "Liquidités disponibles à une date"
        }
      ],
      "groups": [
        {
          "id": "g0",
          "label": "Résultat net"
        },
        {
          "id": "g1",
          "label": "CAF (Capacité d’autofinancement)"
        },
        {
          "id": "g2",
          "label": "Flux de trésorerie"
        },
        {
          "id": "g3",
          "label": "Trésorerie"
        }
      ],
      "expected": {
        "i0": "g0",
        "i1": "g1",
        "i2": "g2",
        "i3": "g3"
      },
      "transfer": {
        "type": "single",
        "prompt": "Le tableau de trésorerie montre une entrée réelle de 50 liée à une ancienne créance. Quel objet décrit ce mouvement de période ?",
        "options": [
          {
            "id": "o0",
            "label": "Un flux de trésorerie",
            "confusion": "Raisonnement attendu : Un encaissement est un flux réel. Il ne suffit pas à connaître le stock final de banque, le résultat ou la capacité d’autofinancement."
          },
          {
            "id": "o1",
            "label": "Un nouveau résultat net de 50",
            "confusion": "Confusion ciblée : Un nouveau résultat net de 50. À confronter à : Un encaissement est un flux réel. Il ne suffit pas à connaître le stock final de banque, le résultat ou la capacité d’autofinancement."
          },
          {
            "id": "o2",
            "label": "Une CAF nécessairement égale à 50",
            "confusion": "Confusion ciblée : Une CAF nécessairement égale à 50. À confronter à : Un encaissement est un flux réel. Il ne suffit pas à connaître le stock final de banque, le résultat ou la capacité d’autofinancement."
          },
          {
            "id": "o3",
            "label": "Un stock de trésorerie de fin de période égal à 50",
            "confusion": "Confusion ciblée : Un stock de trésorerie de fin de période égal à 50. À confronter à : Un encaissement est un flux réel. Il ne suffit pas à connaître le stock final de banque, le résultat ou la capacité d’autofinancement."
          }
        ],
        "expected": "o0",
        "explanation": "Un encaissement est un flux réel. Il ne suffit pas à connaître le stock final de banque, le résultat ou la capacité d’autofinancement.",
        "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "difficulty": "transfert"
      },
      "errorCode": "CONF_NET_CASH",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Le concept décrit-il performance, potentiel, mouvement ou stock ?",
        "hint": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
        "explanation": "Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici."
      },
      "lesson": "Frontière de la mission : résultat net, CAF (Capacité d’autofinancement), flux de trésorerie et trésorerie sont différents. La CAF (Capacité d’autofinancement) est une passerelle française de ressources internes potentielles ; elle n’est pas une ligne obligatoire du tableau de flux IFRS (International Financial Reporting Standards - normes internationales d’information financière). Aucun calcul de flux n’est nécessaire ici.",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici.",
      "conceptCodes": [
        "CONF_NET_CASH"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 2,
      "itemFeedback": {
        "i0": {
          "hint": "Le concept décrit-il performance, potentiel, mouvement ou stock ?",
          "confusion": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
          "explanation": "Performance comptable finale : Résultat net. Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici."
        },
        "i1": {
          "hint": "Le concept décrit-il performance, potentiel, mouvement ou stock ?",
          "confusion": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
          "explanation": "Ressources internes potentielles par retraitements comptables français : CAF (Capacité d’autofinancement). Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici."
        },
        "i2": {
          "hint": "Le concept décrit-il performance, potentiel, mouvement ou stock ?",
          "confusion": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
          "explanation": "Mouvements réels de cash sur une période : Flux de trésorerie. Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici."
        },
        "i3": {
          "hint": "Le concept décrit-il performance, potentiel, mouvement ou stock ?",
          "confusion": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
          "explanation": "Liquidités disponibles à une date : Trésorerie. Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici."
        }
      },
      "courseRef": "l-boundaries-notion",
      "exampleRef": "l-boundaries-exemple"
    },
    {
      "id": "l-final",
      "block": "real-case",
      "title": "8. Validation finale : reconstruire et décider",
      "type": "assessment",
      "prompt": "Validation finale : dossier nouveau et lecture critique. Répondez aux 14 raisonnements, sans relire d’abord les corrections. Seuil 12/14 ; les thèmes fragiles restent à expliquer sur brouillon.",
      "questions": [
        {
          "type": "number",
          "prompt": "Dossier inédit : prestation exécutée avec droit au paiement acquis 6 000 €, encaissés 2 000 €. Produit de la période, en euros ?",
          "expected": 6000,
          "tolerance": 0,
          "calculation": {
            "expression": "6000",
            "unit": "€",
            "rounding": null
          },
          "id": "q0",
          "title": "Période",
          "explanation": "La prestation exécutée avec droit au paiement acquis crée le produit entier de 6 000 € ; l’encaissement de 2 000 € n’en réduit pas le montant.",
          "courseRef": "f-credit-notion",
          "courseBlock": "fundamentals"
        },
        {
          "type": "single",
          "prompt": "La même entreprise reçoit 15 000 € d’emprunt. Quel raisonnement est correct ?",
          "options": [
            {
              "id": "o1",
              "label": "Produit financier +15 000 ; dette inchangée",
              "confusion": "Confusion ciblée : Produit financier +15 000 ; dette inchangée. À confronter à : Un emprunt augmente la dette et la trésorerie ; le montant reçu n’est pas une vente ni un produit."
            },
            {
              "id": "o0",
              "label": "Dette et trésorerie +15 000 ; chiffre d’affaires inchangé",
              "confusion": "Raisonnement attendu : Un emprunt augmente la dette et la trésorerie ; le montant reçu n’est pas une vente ni un produit."
            },
            {
              "id": "o2",
              "label": "Chiffre d’affaires +15 000 ; dette inchangée",
              "confusion": "Confusion ciblée : Chiffre d’affaires +15 000 ; dette inchangée. À confronter à : Un emprunt augmente la dette et la trésorerie ; le montant reçu n’est pas une vente ni un produit."
            },
            {
              "id": "o3",
              "label": "Résultat et capitaux propres +15 000 ; dette inchangée",
              "confusion": "Confusion ciblée : Résultat et capitaux propres +15 000 ; dette inchangée. À confronter à : Un emprunt augmente la dette et la trésorerie ; le montant reçu n’est pas une vente ni un produit."
            }
          ],
          "expected": "o0",
          "id": "q1",
          "title": "Financement",
          "explanation": "Un emprunt augmente la dette et la trésorerie ; le montant reçu n’est pas une vente ni un produit.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "f-cross-notion",
          "courseBlock": "fundamentals"
        },
        {
          "type": "number",
          "prompt": "Machine disponible toute l’année, 30 000 €, cinq ans, valeur résiduelle nulle. Dotation annuelle, euros ?",
          "expected": 6000,
          "tolerance": 0,
          "calculation": {
            "expression": "30000/5",
            "unit": "€",
            "rounding": null
          },
          "id": "q2",
          "title": "Investissement",
          "explanation": "L’équipement est consommé sur cinq années d’usage : la dotation répartit le coût de 30 000 €, sans déclencher cinq paiements.",
          "courseRef": "f-capex-notion",
          "courseBlock": "fundamentals"
        },
        {
          "type": "number",
          "prompt": "Négoce simple : stock initial 12, achats 70, stock final 22. Coût acheté-vendu, k€ ?",
          "expected": 60,
          "tolerance": 0,
          "calculation": {
            "expression": "12+70-22",
            "unit": "k€",
            "rounding": null
          },
          "id": "q3",
          "title": "Coût vendu",
          "explanation": "Le coût acheté-vendu comprend le stock initial plus les achats, moins le stock restant à vendre.",
          "courseRef": "o-stock-notion",
          "courseBlock": "operations"
        },
        {
          "type": "number",
          "prompt": "Ventes 180 ; coût vendu 105, k€. Marge brute dans cette présentation ?",
          "expected": 75,
          "tolerance": 0,
          "calculation": {
            "expression": "180-105",
            "unit": "k€",
            "rounding": null
          },
          "id": "q4",
          "title": "Premier solde",
          "explanation": "La marge brute est le premier sous-total après coût des ventes, pas le bénéfice final.",
          "courseRef": "o-gross-notion",
          "courseBlock": "operations"
        },
        {
          "type": "number",
          "prompt": "Marge brute 75 ; autres charges opérationnelles 45, k€. Exploitation ?",
          "expected": 30,
          "tolerance": 0,
          "calculation": {
            "expression": "75-45",
            "unit": "k€",
            "rounding": null
          },
          "id": "q5",
          "title": "Exploitation",
          "explanation": "Le résultat d’exploitation retranche les autres charges opérationnelles de la marge brute.",
          "courseRef": "o-nova-notion",
          "courseBlock": "operations"
        },
        {
          "type": "number",
          "prompt": "Exploitation 30, produits financiers 2, intérêts 7, k€. Résultat avant impôt ?",
          "expected": 25,
          "tolerance": 0,
          "calculation": {
            "expression": "30+2-7",
            "unit": "k€",
            "rounding": null
          },
          "id": "q6",
          "title": "Finance",
          "explanation": "Les produits financiers s’ajoutent à l’exploitation ; les intérêts sont retranchés pour former le niveau avant impôt.",
          "courseRef": "r-maison-notion",
          "courseBlock": "final-result"
        },
        {
          "type": "number",
          "prompt": "Avant impôt 25, impôt 6, k€. Résultat net ?",
          "expected": 19,
          "tolerance": 0,
          "calculation": {
            "expression": "25-6",
            "unit": "k€",
            "rounding": null
          },
          "id": "q7",
          "title": "Net",
          "explanation": "L’impôt est retranché du niveau avant impôt pour former le résultat net.",
          "courseRef": "r-maison-notion",
          "courseBlock": "final-result"
        },
        {
          "type": "single",
          "prompt": "Ce résultat net de 19 prouve-t-il que 19 seront versés en dividendes ?",
          "options": [
            {
              "id": "o1",
              "label": "Le bénéfice de 19 constitue automatiquement le dividende",
              "confusion": "Confusion ciblée : Le bénéfice de 19 constitue automatiquement le dividende. À confronter à : Le résultat net mesure le bénéfice comptable. La distribution et sa date de paiement restent à décider et à vérifier."
            },
            {
              "id": "o2",
              "label": "Le cash disponible est nécessairement égal à 19",
              "confusion": "Confusion ciblée : Le cash disponible est nécessairement égal à 19. À confronter à : Le résultat net mesure le bénéfice comptable. La distribution et sa date de paiement restent à décider et à vérifier."
            },
            {
              "id": "o0",
              "label": "L’affectation et la capacité à payer restent à examiner",
              "confusion": "Raisonnement attendu : Le résultat net mesure le bénéfice comptable. La distribution et sa date de paiement restent à décider et à vérifier."
            },
            {
              "id": "o3",
              "label": "L’investissement doit être retranché à nouveau du net",
              "confusion": "Confusion ciblée : L’investissement doit être retranché à nouveau du net. À confronter à : Le résultat net mesure le bénéfice comptable. La distribution et sa date de paiement restent à décider et à vérifier."
            }
          ],
          "expected": "o0",
          "id": "q8",
          "title": "Distribution",
          "explanation": "Le résultat net mesure le bénéfice comptable. La distribution et sa date de paiement restent à décider et à vérifier.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "r-dividend-notion",
          "courseBlock": "final-result"
        },
        {
          "type": "single",
          "prompt": "Ventes de 100 à 120 ; exploitation de 10 à 9. Quelle observation est exacte ?",
          "options": [
            {
              "id": "o1",
              "label": "Ventes +20 %, exploitation +10 %, taux de 10 % à 12 %",
              "confusion": "Confusion ciblée : Ventes +20 %, exploitation +10 %, taux de 10 % à 12 %. À confronter à : Les ventes augmentent de 20 %, l’exploitation baisse de 10 % : les taux opérationnels passent de 10 % à 7,5 %, soit -2,5 points. Le montant et le taux répondent à des questions différentes."
            },
            {
              "id": "o2",
              "label": "Ventes +20 %, exploitation -1 %, taux de 10 % à 9 %",
              "confusion": "Confusion ciblée : Ventes +20 %, exploitation -1 %, taux de 10 % à 9 %. À confronter à : Les ventes augmentent de 20 %, l’exploitation baisse de 10 % : les taux opérationnels passent de 10 % à 7,5 %, soit -2,5 points. Le montant et le taux répondent à des questions différentes."
            },
            {
              "id": "o3",
              "label": "Ventes +20 %, exploitation -10 %, taux de 10 % à 9 %",
              "confusion": "Confusion ciblée : Ventes +20 %, exploitation -10 %, taux de 10 % à 9 %. À confronter à : Les ventes augmentent de 20 %, l’exploitation baisse de 10 % : les taux opérationnels passent de 10 % à 7,5 %, soit -2,5 points. Le montant et le taux répondent à des questions différentes."
            },
            {
              "id": "o0",
              "label": "Ventes +20 %, exploitation -10 %, taux de 10 % à 7,5 %",
              "confusion": "Raisonnement attendu : Les ventes augmentent de 20 %, l’exploitation baisse de 10 % : les taux opérationnels passent de 10 % à 7,5 %, soit -2,5 points. Le montant et le taux répondent à des questions différentes."
            }
          ],
          "expected": "o0",
          "id": "q9",
          "title": "Montant et taux",
          "explanation": "Les ventes augmentent de 20 %, l’exploitation baisse de 10 % : les taux opérationnels passent de 10 % à 7,5 %, soit -2,5 points. Le montant et le taux répondent à des questions différentes.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "a-mydeco-notion",
          "courseBlock": "analysis"
        },
        {
          "type": "single",
          "prompt": "Quel rapprochement Gross margin / marge commerciale est défendable ?",
          "options": [
            {
              "id": "o0",
              "label": "Examiner activité, définitions et périmètre avant rapprochement",
              "confusion": "Raisonnement attendu : La marge commerciale française concerne l’achat-revente et son coût acheté-vendu ; le périmètre d’une marge brute publiée doit être examiné séparément."
            },
            {
              "id": "o1",
              "label": "Retenir une identité à partir du seul mot marge",
              "confusion": "Confusion ciblée : Retenir une identité à partir du seul mot marge. À confronter à : La marge commerciale française concerne l’achat-revente et son coût acheté-vendu ; le périmètre d’une marge brute publiée doit être examiné séparément."
            },
            {
              "id": "o2",
              "label": "Assimiler les deux soldes si leurs valeurs sont proches",
              "confusion": "Confusion ciblée : Assimiler les deux soldes si leurs valeurs sont proches. À confronter à : La marge commerciale française concerne l’achat-revente et son coût acheté-vendu ; le périmètre d’une marge brute publiée doit être examiné séparément."
            },
            {
              "id": "o3",
              "label": "Déduire une marge commerciale des seuls encaissements",
              "confusion": "Confusion ciblée : Déduire une marge commerciale des seuls encaissements. À confronter à : La marge commerciale française concerne l’achat-revente et son coût acheté-vendu ; le périmètre d’une marge brute publiée doit être examiné séparément."
            }
          ],
          "expected": "o0",
          "id": "q10",
          "title": "SIG (Soldes intermédiaires de gestion) et documents",
          "explanation": "La marge commerciale française concerne l’achat-revente et son coût acheté-vendu ; le périmètre d’une marge brute publiée doit être examiné séparément.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "s-vocabulary-notion",
          "courseBlock": "sig"
        },
        {
          "type": "single",
          "prompt": "Un EBE positif est observé. Quelle lecture respecte la frontière avec le cash ?",
          "options": [
            {
              "id": "o1",
              "label": "Assimiler le surplus comptable à un encaissement",
              "confusion": "Confusion ciblée : Assimiler le surplus comptable à un encaissement. À confronter à : Le surplus brut comptable ne suffit pas à décrire les encaissements : les créances, stocks et fournisseurs introduisent des décalages."
            },
            {
              "id": "o0",
              "label": "Examiner délais, stocks et autres flux avant de conclure",
              "confusion": "Raisonnement attendu : Le surplus brut comptable ne suffit pas à décrire les encaissements : les créances, stocks et fournisseurs introduisent des décalages."
            },
            {
              "id": "o2",
              "label": "Déduire le solde bancaire du signe positif de l’EBE",
              "confusion": "Confusion ciblée : Déduire le solde bancaire du signe positif de l’EBE. À confronter à : Le surplus brut comptable ne suffit pas à décrire les encaissements : les créances, stocks et fournisseurs introduisent des décalages."
            },
            {
              "id": "o3",
              "label": "Assimiler l’EBE au résultat net après impôt",
              "confusion": "Confusion ciblée : Assimiler l’EBE au résultat net après impôt. À confronter à : Le surplus brut comptable ne suffit pas à décrire les encaissements : les créances, stocks et fournisseurs introduisent des décalages."
            }
          ],
          "expected": "o0",
          "id": "q11",
          "title": "Surplus et cash",
          "explanation": "Le surplus brut comptable ne suffit pas à décrire les encaissements : les créances, stocks et fournisseurs introduisent des décalages.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "s-ebe-notion",
          "courseBlock": "sig"
        },
        {
          "type": "single",
          "prompt": "LVMH (Louis Vuitton Moët Hennessy) 2025 publie 11 222 M€ avant minoritaires et 10 878 M€ part du Groupe. Quel montant attribuer au Groupe ?",
          "options": [
            {
              "id": "o1",
              "label": "11 222 M€ attribuables au Groupe",
              "confusion": "Confusion ciblée : 11 222 M€ attribuables au Groupe. À confronter à : La part du Groupe est le bénéfice attribuable au Groupe après attribution de la part des autres détenteurs ; ce n’est ni une nouvelle charge opérationnelle ni un dividende."
            },
            {
              "id": "o2",
              "label": "344 M€ attribuables au Groupe",
              "confusion": "Confusion ciblée : 344 M€ attribuables au Groupe. À confronter à : La part du Groupe est le bénéfice attribuable au Groupe après attribution de la part des autres détenteurs ; ce n’est ni une nouvelle charge opérationnelle ni un dividende."
            },
            {
              "id": "o0",
              "label": "10 878 M€ attribuables au Groupe",
              "confusion": "Raisonnement attendu : La part du Groupe est le bénéfice attribuable au Groupe après attribution de la part des autres détenteurs ; ce n’est ni une nouvelle charge opérationnelle ni un dividende."
            },
            {
              "id": "o3",
              "label": "17 099 M€ attribuables au Groupe",
              "confusion": "Confusion ciblée : 17 099 M€ attribuables au Groupe. À confronter à : La part du Groupe est le bénéfice attribuable au Groupe après attribution de la part des autres détenteurs ; ce n’est ni une nouvelle charge opérationnelle ni un dividende."
            }
          ],
          "expected": "o0",
          "id": "q12",
          "title": "LVMH (Louis Vuitton Moët Hennessy), attribution",
          "explanation": "La part du Groupe est le bénéfice attribuable au Groupe après attribution de la part des autres détenteurs ; ce n’est ni une nouvelle charge opérationnelle ni un dividende.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "l-group-notion",
          "courseBlock": "real-case"
        },
        {
          "type": "single",
          "prompt": "Des frais commerciaux importants sont observés. Quelle démarche respecte les données ?",
          "options": [
            {
              "id": "o1",
              "label": "Réduire tous les frais proportionnellement à leur montant",
              "confusion": "Confusion ciblée : Réduire tous les frais proportionnellement à leur montant. À confronter à : Un poste important est une observation. Il faut formuler une hypothèse, identifier les données qui la testent puis conditionner la recommandation à ces vérifications."
            },
            {
              "id": "o2",
              "label": "Déduire leur inefficacité de leur seul montant élevé",
              "confusion": "Confusion ciblée : Déduire leur inefficacité de leur seul montant élevé. À confronter à : Un poste important est une observation. Il faut formuler une hypothèse, identifier les données qui la testent puis conditionner la recommandation à ces vérifications."
            },
            {
              "id": "o3",
              "label": "Comparer les dépenses aux dividendes pour conclure",
              "confusion": "Confusion ciblée : Comparer les dépenses aux dividendes pour conclure. À confronter à : Un poste important est une observation. Il faut formuler une hypothèse, identifier les données qui la testent puis conditionner la recommandation à ces vérifications."
            },
            {
              "id": "o0",
              "label": "Tester une hypothèse avec la ventilation et les effets des dépenses",
              "confusion": "Raisonnement attendu : Un poste important est une observation. Il faut formuler une hypothèse, identifier les données qui la testent puis conditionner la recommandation à ces vérifications."
            }
          ],
          "expected": "o0",
          "id": "q13",
          "title": "Décision",
          "explanation": "Un poste important est une observation. Il faut formuler une hypothèse, identifier les données qui la testent puis conditionner la recommandation à ces vérifications.",
          "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
          "difficulty": "application",
          "courseRef": "a-method-notion",
          "courseBlock": "analysis"
        }
      ],
      "threshold": 12,
      "transfer": {
        "type": "single",
        "prompt": "Un analyste constate bénéfice positif, créances en hausse et nouveaux investissements. Quelle conclusion prépare correctement l’étape suivante ?",
        "options": [
          {
            "id": "o0",
            "label": "Examiner le tableau des flux pour expliquer la transformation du résultat en cash",
            "confusion": "Raisonnement attendu : Le résultat, le financement des créances et les investissements ont des calendriers et des natures distincts. Le tableau des flux permettra de documenter les mouvements réels."
          },
          {
            "id": "o1",
            "label": "Assimiler le bénéfice au cash disponible pour investir",
            "confusion": "Confusion ciblée : Assimiler le bénéfice au cash disponible pour investir. À confronter à : Le résultat, le financement des créances et les investissements ont des calendriers et des natures distincts. Le tableau des flux permettra de documenter les mouvements réels."
          },
          {
            "id": "o2",
            "label": "Retrancher tous les investissements du résultat net publié",
            "confusion": "Confusion ciblée : Retrancher tous les investissements du résultat net publié. À confronter à : Le résultat, le financement des créances et les investissements ont des calendriers et des natures distincts. Le tableau des flux permettra de documenter les mouvements réels."
          },
          {
            "id": "o3",
            "label": "Ajouter les créances au bénéfice comme des encaissements",
            "confusion": "Confusion ciblée : Ajouter les créances au bénéfice comme des encaissements. À confronter à : Le résultat, le financement des créances et les investissements ont des calendriers et des natures distincts. Le tableau des flux permettra de documenter les mouvements réels."
          }
        ],
        "expected": "o0",
        "explanation": "Le résultat, le financement des créances et les investissements ont des calendriers et des natures distincts. Le tableau des flux permettra de documenter les mouvements réels.",
        "skill": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "difficulty": "transfert"
      },
      "errorCode": "FINAL_CORE",
      "remediation": {
        "guideAfter": 1,
        "hintAfter": 2,
        "explanationAfter": 3,
        "guide": "Identifiez les thèmes signalés et refaites le raisonnement sur brouillon.",
        "hint": "Reprenez la chaîne économique, les frontières avec le cash et la méthode observation/hypothèse/vérification.",
        "explanation": "Dossier nouveau : produit 6 000 € ; dotation 6 000 € ; coût vendu 60 k€ ; marge brute 75 ; exploitation 30 ; avant impôt 25 ; net 19. Emprunt, distribution et cash restent distincts. Les comparaisons exigent le bon périmètre et la décision exige une hypothèse testée."
      },
      "lesson": "Cette validation combine les distinctions économiques, une chaîne de calcul dans un dossier différent et la prudence d’analyse. La note LVMH (Louis Vuitton Moët Hennessy) précédente complète le questionnaire : une réponse cochée ne remplace pas une justification. Aucun chronomètre n’impose le rythme. Repères utiles : SIG (Soldes intermédiaires de gestion).",
      "example": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
      "successFeedback": "Validation franchie. Votre raisonnement doit rester traçable : période et périmètre, sous-totaux distincts, taux nommé, hypothèse conditionnelle, information à vérifier. Un bénéfice n’est ni un dividende ni un solde bancaire.",
      "conceptCodes": [
        "FINAL_CORE"
      ],
      "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
      "estimatedMinutes": 6,
      "courseRef": "l-final-notion",
      "exampleRef": "l-final-exemple"
    }
  ],
  "lvmh": [
    [
      "Chiffre d’affaires",
      "Revenue",
      80807
    ],
    [
      "Coût des ventes",
      "Cost of sales",
      -27279
    ],
    [
      "Marge brute",
      "Gross margin",
      53528
    ],
    [
      "Frais commerciaux",
      "Marketing and selling expenses",
      -29914
    ],
    [
      "Frais généraux et administratifs",
      "General and administrative expenses",
      -5934
    ],
    [
      "Coentreprises et entreprises associées",
      "Income/(Loss) from joint ventures and associates",
      75
    ],
    [
      "Résultat opérationnel courant",
      "Profit from recurring operations",
      17755
    ],
    [
      "Autres éléments opérationnels",
      "Other operating income and expenses",
      -656
    ],
    [
      "Résultat opérationnel",
      "Operating profit",
      17099
    ],
    [
      "Résultat financier net",
      "Net financial income/(expense)",
      -401
    ],
    [
      "Avant impôt (reconstruit)",
      "Calculated subtotal",
      16698
    ],
    [
      "Impôts sur le résultat",
      "Income taxes",
      -5476
    ],
    [
      "Résultat net avant minoritaires",
      "Net profit before minority interests",
      11222
    ],
    [
      "Intérêts minoritaires",
      "Minority interests",
      -344
    ],
    [
      "Résultat net part du groupe",
      "Net profit, Group share",
      10878
    ]
  ],
  "documents": {
    "fundamentals": {
      "caption": "Bilan simplifié à une date : boutique (euros). Le total actif égale le total passif.",
      "headers": [
        "Actif : ressources détenues",
        "Montant",
        "Passif : origines du financement",
        "Montant"
      ],
      "rows": [
        [
          "Matériel",
          30000,
          "Capitaux propres",
          20000
        ],
        [
          "Créance client",
          600,
          "Dette bancaire",
          12000
        ],
        [
          "Trésorerie",
          1400,
          "",
          ""
        ],
        [
          "Total actif",
          32000,
          "Total passif",
          32000
        ]
      ],
      "location": "Le matériel, la créance et la trésorerie sont à l’actif ; les capitaux propres et les dettes sont au passif. Le bilan montre une situation, pas les ventes de l’année."
    },
    "operations": {
      "caption": "Compte de résultat simplifié - exemple travaillé distinct (unités monétaires)",
      "headers": [
        "Ligne",
        "Montant"
      ],
      "rows": [
        [
          "Chiffre d’affaires",
          100
        ],
        [
          "Coût des ventes",
          -65
        ],
        [
          "Marge brute",
          35
        ],
        [
          "Autres charges opérationnelles",
          -25
        ],
        [
          "Résultat opérationnel",
          10
        ]
      ],
      "location": "Lisez du haut vers le bas : les ventes, le coût vendu, puis la marge brute ; les autres charges conduisent à l’exploitation. Le net exige encore la finance et l’impôt."
    },
    "final-result": {
      "caption": "Compte de résultat simplifié - exemple travaillé distinct",
      "headers": [
        "Ligne",
        "Montant"
      ],
      "rows": [
        [
          "Résultat d’exploitation",
          50
        ],
        [
          "Résultat financier",
          -4
        ],
        [
          "Résultat avant impôt",
          46
        ],
        [
          "Impôt",
          -12
        ],
        [
          "Résultat net",
          34
        ]
      ],
      "location": "Le coût du financement et l’impôt se situent après l’exploitation. La ligne finale mesure le bénéfice de période, pas le solde bancaire."
    },
    "analysis": {
      "caption": "Comparer des périmètres identiques - exemple travaillé distinct",
      "headers": [
        "Indicateur",
        "Période initiale",
        "Période finale"
      ],
      "rows": [
        [
          "Ventes",
          1000,
          1200
        ],
        [
          "Exploitation",
          120,
          108
        ],
        [
          "Marge opérationnelle",
          "12 %",
          "9 %"
        ]
      ],
      "location": "Le taux rapporte le résultat d’exploitation aux mêmes ventes de la période. Comparez ensuite les taux en points avant de chercher une cause."
    },
    "sig": {
      "caption": "Atelier Noma - tableau de construction des SIG, k€ - support FINAL V3, diapositives 23 et 24",
      "headers": [
        "Libellé professionnel",
        "Montant (k€)",
        "Construction / interprétation"
      ],
      "rows": [
        [
          "ACHAT-REVENTE",
          "",
          ""
        ],
        [
          "Ventes de marchandises",
          300,
          ""
        ],
        [
          "Coût acheté-vendu",
          -180,
          ""
        ],
        [
          "Marge commerciale",
          "À calculer",
          "Premier solde du négoce"
        ],
        [
          "PRODUCTION",
          "",
          ""
        ],
        [
          "Production vendue",
          200,
          ""
        ],
        [
          "Production stockée",
          20,
          ""
        ],
        [
          "Production immobilisée",
          10,
          ""
        ],
        [
          "Production de l’exercice",
          "À calculer",
          "Somme des trois productions"
        ],
        [
          "Matières consommées",
          -70,
          ""
        ],
        [
          "Services extérieurs",
          -60,
          ""
        ],
        [
          "Valeur ajoutée",
          "À calculer",
          "Marge commerciale + production - consommations externes"
        ],
        [
          "Subventions d’exploitation",
          5,
          ""
        ],
        [
          "Impôts et taxes d’exploitation",
          -10,
          ""
        ],
        [
          "Charges de personnel",
          -75,
          ""
        ],
        [
          "EBE (Excédent brut d’exploitation)",
          "À calculer",
          "Avant dotations et finance"
        ],
        [
          "Dotations aux amortissements",
          -18,
          ""
        ],
        [
          "Dépréciations / provisions",
          -4,
          ""
        ],
        [
          "Autres charges d’exploitation",
          -3,
          ""
        ],
        [
          "Résultat d’exploitation",
          "À calculer",
          "Cas simplifié sans reprises ni autres produits"
        ],
        [
          "Produits financiers",
          1,
          ""
        ],
        [
          "Charges financières",
          -7,
          ""
        ],
        [
          "Résultat financier",
          "À calculer",
          "Solde autonome de la finance"
        ],
        [
          "RCAI (Résultat courant avant impôts)",
          "À calculer",
          "Exploitation + résultat financier"
        ],
        [
          "Impôt sur les bénéfices",
          -30,
          ""
        ],
        [
          "Résultat net",
          "À calculer",
          "Sans exceptionnel ni participation dans ce cas"
        ]
      ],
      "rowKinds": [
        "section",
        "product",
        "charge",
        "subtotal",
        "section",
        "product",
        "product",
        "product",
        "subtotal",
        "charge",
        "charge",
        "subtotal",
        "product",
        "charge",
        "charge",
        "subtotal",
        "charge",
        "charge",
        "charge",
        "result",
        "product",
        "charge",
        "subtotal",
        "result",
        "charge",
        "result"
      ],
      "columnTypes": [
        "label",
        "amount",
        "note"
      ],
      "location": "Produits et charges sont signés. Les sous-totaux restent à construire dans les activités. Ce tableau pédagogique correspond au cas mixte Noma du support ; ce n’est pas une grille IFRS LVMH."
    }
  },
  "opening": {
    "minutes": 4,
    "title": "De la donnée à la décision",
    "question": "Un bénéfice suffit-il pour décider de distribuer ou d’investir ?",
    "text": "Avant de commencer, notez votre première réponse et une information qui vous manquerait. Vous la reprendrez à la fin, sans chercher une réponse de vocabulaire. Votre rôle : analyste junior. Vous préparez une analyse pour votre manager ; à ce stade, on ne vous demande pas encore de prendre une décision seul.",
    "map": "Fondamentaux -> Exploitation -> Résultat final -> Analyse -> SIG (Soldes intermédiaires de gestion) -> Cas réel.",
    "instructions": "Prévoyez un brouillon et une calculatrice. Parcours autonome à votre rythme. k€ signifie milliers d’euros ; M€ signifie millions d’euros. Dans vos réponses, utilisez uniquement les données des cas, sans donnée personnelle."
  },
  "versions": {
    "appVersion": "4.0.0",
    "contentVersion": "4.0.0",
    "stateVersion": 2
  },
  "glossary": {
    "Actif": "Ce que l’entreprise contrôle et utilise : matériel, stock, créance ou argent en banque.",
    "Passif": "Les ressources qui financent l’actif : capitaux propres et dettes.",
    "Capitaux propres": "Ressources appartenant aux propriétaires, dont les apports et les bénéfices conservés.",
    "Créance": "Droit à recevoir de l’argent. Une vente réalisée mais non payée peut créer une créance client.",
    "Dette": "Obligation envers un tiers. Recevoir un emprunt crée une dette, sans créer un produit.",
    "Stock": "Biens conservés à une date pour être vendus ou utilisés. Le stock final n’est pas entièrement consommé.",
    "Produit": "Valeur comptable créée pendant la période. Une vente acquise peut être un produit avant son paiement.",
    "Charge": "Consommation ou coût rattaché à la période. Une charge peut précéder ou suivre son paiement.",
    "Chiffre d’affaires": "Ventes de biens et de services de l’activité habituelle, hors taxes dans ces cas. Il ne regroupe pas tous les produits.",
    "Résultat": "Produits moins charges d’une même période. Positif : bénéfice ; négatif : perte.",
    "Encaissement": "Entrée effective d’argent. Un emprunt encaissé n’est pas une vente.",
    "Décaissement": "Sortie effective d’argent. Rembourser le capital d’un emprunt n’est pas une charge.",
    "Immobilisation": "Bien destiné à servir durablement, par exemple une machine. Son achat ne devient pas intégralement une charge immédiate.",
    "CAPEX": "Capital expenditures : dépenses d’investissement. Ici, achat d’une immobilisation durable.",
    "Amortissement": "Répartition du montant amortissable d’un bien sur sa durée d’utilisation. La dotation est une charge de la période, sans nouveau paiement.",
    "Dépréciation": "Constat comptable d’une perte de valeur d’un actif ; elle se distingue de l’usure planifiée.",
    "Provision": "Constat comptable d’un risque ou d’une obligation dont le montant ou l’échéance est incertain.",
    "Marge brute": "Ventes moins coût des ventes dans le périmètre du document. Ce coût peut inclure du personnel de production.",
    "Marge commerciale": "Ventes de marchandises moins coût d’achat des marchandises vendues. Elle concerne l’achat-revente.",
    "Production immobilisée": "Production réalisée par l’entreprise pour son propre usage durable. Elle ne correspond pas à une vente encaissée.",
    "Consommations externes": "Biens et services consommés provenant de tiers. Dans Noma : matières consommées et services externes.",
    "Valeur ajoutée": "Richesse créée après les consommations externes, avant notamment personnel et taxes d’exploitation.",
    "SIG": "Soldes intermédiaires de gestion : étapes qui expliquent la formation du résultat dans une grille française.",
    "EBE": "Excédent brut d’exploitation : valeur ajoutée + subventions d’exploitation - taxes d’exploitation - personnel. Ce n’est pas un solde bancaire.",
    "RCAI": "Résultat courant avant impôts : exploitation + résultat financier dans les cas français étudiés.",
    "Participation": "Part du résultat revenant aux salariés selon les règles applicables. Elle se déduit pour passer au résultat net lorsqu’elle est fournie.",
    "IFRS": "Normes internationales d’information financière. Les intitulés d’un groupe ne sont pas automatiquement les SIG français.",
    "EBITDA": "Earnings before interest, taxes, depreciation and amortisation : indicateur avant intérêts, impôts et certaines dotations. Sa définition varie ; il n’est pas automatiquement égal à l’EBE.",
    "Bénéfice par action": "Bénéfice attribuable divisé par le nombre d’actions retenu dans le cas simplifié. Il ne promet pas un dividende.",
    "Dividende": "Part de bénéfice dont la distribution est décidée. Décision et paiement sont distincts du calcul du résultat.",
    "Point de pourcentage": "Différence entre deux taux : de 20 % à 15 %, baisse de 5 points. La baisse relative est de 25 %.",
    "Taux de marge": "En négoce français : marge commerciale / coût d’achat des marchandises vendues × 100.",
    "Taux de marque": "Marge commerciale / ventes de marchandises × 100. Le dénominateur diffère du taux de marge.",
    "Ratio": "Rapport entre deux données cohérentes. Un ratio est un outil d’analyse, pas un quatrième état financier.",
    "Part du groupe": "Fraction du bénéfice consolidé attribuable aux propriétaires de la société mère, après les intérêts minoritaires.",
    "Intérêts minoritaires": "Part du résultat des filiales revenant aux autres propriétaires. Ce n’est pas une charge financière."
  },
  "courses": {
    "fundamentals": [
      {
        "id": "repere-0",
        "title": "Le bilan : comprendre une situation",
        "text": "Le bilan décrit ce que l’entreprise possède et comment cela est financé à une date. Un client doit 2 000 € : l’entreprise détient une créance, mais pas encore cet argent en banque. Comparer deux bilans aide à repérer les variations des stocks, créances, dettes et de la trésorerie.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "repere-1",
        "title": "Le résultat : expliquer une période",
        "text": "Le compte de résultat rapproche produits et charges d’une période. Une prestation réalisée en décembre et payée en janvier peut contribuer au résultat de décembre. Le bilan ne permet pas mécaniquement de calculer ce résultat.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "repere-2",
        "title": "Les flux : suivre les mouvements d’argent",
        "text": "Le tableau des flux explique pourquoi la trésorerie varie pendant une période : activité, investissement et financement. Le règlement du client est un encaissement. Cette entrée peut survenir après la vente.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "repere-3",
        "title": "Les ratios : interpréter les états",
        "text": "Le bilan, le compte de résultat et le tableau des flux sont trois états financiers. Les ratios sont des outils pour les analyser. Un bénéfice de 10 000 € pour 100 000 € de ventes donne une marge nette de 10 %. Ce taux doit être comparé et contextualisé.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mission",
        "title": "Fondamentaux : votre objectif",
        "text": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "retain": "Le résultat mesure une performance sur une période. Il ne mesure ni le patrimoine à une date ni le solde bancaire."
      },
      {
        "id": "fundamentals-mot-5",
        "title": "Actif",
        "text": "Ce que l’entreprise contrôle et utilise : matériel, stock, créance ou argent en banque.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-6",
        "title": "Passif",
        "text": "Les ressources qui financent l’actif : capitaux propres et dettes.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-7",
        "title": "Capitaux propres",
        "text": "Ressources appartenant aux propriétaires, dont les apports et les bénéfices conservés.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-8",
        "title": "Créance",
        "text": "Droit à recevoir de l’argent. Une vente réalisée mais non payée peut créer une créance client.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-9",
        "title": "Dette",
        "text": "Obligation envers un tiers. Recevoir un emprunt crée une dette, sans créer un produit.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-10",
        "title": "Produit",
        "text": "Valeur comptable créée pendant la période. Une vente acquise peut être un produit avant son paiement.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-11",
        "title": "Charge",
        "text": "Consommation ou coût rattaché à la période. Une charge peut précéder ou suivre son paiement.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-12",
        "title": "Chiffre d’affaires",
        "text": "Ventes de biens et de services de l’activité habituelle, hors taxes dans ces cas. Il ne regroupe pas tous les produits.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-13",
        "title": "Résultat",
        "text": "Produits moins charges d’une même période. Positif : bénéfice ; négatif : perte.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-14",
        "title": "Encaissement",
        "text": "Entrée effective d’argent. Un emprunt encaissé n’est pas une vente.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-15",
        "title": "Décaissement",
        "text": "Sortie effective d’argent. Rembourser le capital d’un emprunt n’est pas une charge.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-16",
        "title": "Immobilisation",
        "text": "Bien destiné à servir durablement, par exemple une machine. Son achat ne devient pas intégralement une charge immédiate.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-17",
        "title": "CAPEX",
        "text": "Capital expenditures : dépenses d’investissement. Ici, achat d’une immobilisation durable.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-mot-18",
        "title": "Amortissement",
        "text": "Répartition du montant amortissable d’un bien sur sa durée d’utilisation. La dotation est une charge de la période, sans nouveau paiement.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-repere-0",
        "title": "Situer le raisonnement",
        "text": "Avant de calculer, justifiez ce qui appartient à la période. Les classements servent à expliquer les mécanismes ; l’activité de croisement applique ensuite ces mécanismes à de nouvelles situations.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      },
      {
        "id": "fundamentals-formule-0",
        "title": "Résultat de la période",
        "text": "Avant de calculer, repérez la période, les composants et l’unité du résultat.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "formula": {
          "label": "Résultat de la période",
          "expression": "Produits - charges"
        }
      },
      {
        "id": "f-period-notion",
        "title": "Se repérer avant de calculer",
        "text": "quelle information faut-il chercher pour expliquer une performance ? Le bilan décrit ce que l’entreprise possède et doit à une date. Le compte de résultat rattache produits et charges à une période et explique un bénéfice ou une perte. Il ne décrit pas le solde bancaire. Commencez toujours par la question économique, la période et l’unité.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-period"
      },
      {
        "id": "f-period-exemple",
        "title": "Exemple : Se repérer avant de calculer",
        "text": "Une boutique détient 30 000 € de matériel le 31 décembre : information de bilan. Elle a réalisé 90 000 € de ventes pendant l’année : information de compte de résultat.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [],
        "formulas": [],
        "exercise": "f-period"
      },
      {
        "id": "f-period-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le patrimoine se lit au bilan. Produits et charges de la période permettent de calculer son résultat.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "Le bilan est une photographie ; le compte de résultat raconte une période.",
        "exercise": "f-period",
        "writingGuide": null
      },
      {
        "id": "f-credit-notion",
        "title": "Vendre ne signifie pas toujours encaisser",
        "text": "un produit traduit un élément de performance de la période. Un encaissement est une entrée de trésorerie. Vente réalisée ou prestation exécutée : produit et créance si le droit au paiement est acquis. Paiement ultérieur : la créance diminue et la trésorerie augmente, sans nouveau produit. Une facture seule ne suffit pas à créer un produit.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-credit"
      },
      {
        "id": "f-credit-exemple",
        "title": "Exemple : Vendre ne signifie pas toujours encaisser",
        "text": "Prestation exécutée avec droit au paiement acquis : 1 000 €, dont 400 € encaissés. Produit : 1 000 € ; créance : 600 € ; entrée de trésorerie : 400 €. À l’encaissement ultérieur des 600 €, la créance s’éteint sans deuxième produit.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [
          {
            "label": "Prestation réalisée",
            "value": "1 000 € de produit",
            "result": false
          },
          {
            "label": "Somme déjà encaissée",
            "value": "400 €",
            "result": false
          },
          {
            "label": "Créance restant due",
            "value": "1 000 - 400 = 600 €",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Créance restant à recevoir (exemple)",
            "expression": "1 000 - 400 = 600 €"
          }
        ],
        "exercise": "f-credit"
      },
      {
        "id": "f-credit-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le produit de 2 400 € appartient à décembre ; le paiement de janvier éteint une créance sans créer une seconde vente.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "Le règlement ne détermine pas la date du produit.",
        "exercise": "f-credit",
        "writingGuide": null
      },
      {
        "id": "f-payment-notion",
        "title": "Consommer ne signifie pas toujours payer",
        "text": "Un paiement peut solder une dette ancienne ou financer une consommation future. À l’inverse, une ressource consommée peut créer une charge avant son paiement. Ne reconstruisez jamais le résultat en additionnant seulement les mouvements bancaires.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-payment"
      },
      {
        "id": "f-payment-exemple",
        "title": "Exemple : Consommer ne signifie pas toujours payer",
        "text": "Énergie consommée en décembre : 600 €, payés en janvier. Décembre porte la charge de 600 € ; janvier porte le décaissement de 600 €. Une facture ancienne payée aujourd’hui n’est pas une deuxième consommation.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [],
        "formulas": [],
        "exercise": "f-payment"
      },
      {
        "id": "f-payment-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Une charge représente une consommation ou une perte rattachée à la période. Le décaissement représente une sortie de trésorerie.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "Payer une dette déjà comptabilisée ne crée pas une deuxième charge.",
        "exercise": "f-payment",
        "writingGuide": null
      },
      {
        "id": "f-capex-notion",
        "title": "Investissement et amortissement",
        "text": "Acheter une ressource utilisée plusieurs années est un investissement, pas nécessairement une charge intégrale immédiate. L’amortissement traduit sa consommation progressive. Son calcul suppose notamment une durée, une base et une date de mise en service.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": "Amortissement annuel linéaire = (coût de l’équipement - valeur résiduelle) / durée d’utilisation en années, pour une année complète de mise en service.",
        "formulas": [
          {
            "label": "Amortissement annuel linéaire",
            "numerator": "Coût d’acquisition - valeur résiduelle",
            "denominator": "Durée d’utilisation (années)"
          }
        ],
        "exercise": "f-capex"
      },
      {
        "id": "f-capex-exemple",
        "title": "Exemple : Investissement et amortissement",
        "text": "Un ordinateur de 3 000 €, disponible trois années complètes, sans valeur résiduelle : 1 000 € d’amortissement annuel. L’achat payé fait sortir 3 000 € de trésorerie ; la dotation annuelle ne déclenche pas un nouveau paiement.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [
          {
            "label": "Base amortissable",
            "value": "3 000 € - 0 € = 3 000 €",
            "result": false
          },
          {
            "label": "Durée, années complètes",
            "value": "3 ans",
            "result": false
          },
          {
            "label": "Dotation annuelle",
            "value": "3 000 / 3 = 1 000 € par an",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Dotation annuelle (exemple)",
            "numerator": "3 000 €",
            "denominator": "3 années",
            "multiplier": "= 1 000 € par an"
          }
        ],
        "exercise": "f-capex"
      },
      {
        "id": "f-capex-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "24 000 / 4 = 6 000 € par an. L’achat crée une immobilisation ; l’amortissement est la charge répartissant son coût sur sa durée d’utilisation.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "Répartissez le coût amortissable sur les quatre années d’utilisation.",
        "exercise": "f-capex",
        "writingGuide": null
      },
      {
        "id": "f-depreciation-notion",
        "title": "Amortissement : que consomme-t-on ?",
        "text": "l’usure d’un équipement est-elle payée une deuxième fois chaque année ? Non. L’amortissement répartit le coût amortissable sur l’utilisation attendue. C’est une charge de période ; ce n’est pas un virement annuel. Ne confondez pas une charge sans paiement simultané avec une charge imaginaire.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-depreciation"
      },
      {
        "id": "f-depreciation-exemple",
        "title": "Exemple : Amortissement : que consomme-t-on ?",
        "text": "Matériel payé 9 000 € avant l’année étudiée, utilisé trois années complètes sans valeur résiduelle : dotation annuelle 3 000 €. Son paiement et sa consommation comptable ont des calendriers différents.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [
          {
            "label": "Bien déjà payé",
            "value": "9 000 €",
            "result": false
          },
          {
            "label": "Durée",
            "value": "3 années complètes",
            "result": false
          },
          {
            "label": "Charge de l’année",
            "value": "9 000 / 3 = 3 000 €",
            "result": false
          },
          {
            "label": "Nouveau paiement lors de la dotation",
            "value": "0 €",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "f-depreciation"
      },
      {
        "id": "f-depreciation-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "La dotation réduit le résultat sans imposer un nouveau décaissement. Le paiement de l’investissement a eu lieu l’an dernier.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "L’achat est déjà payé ; cherchez seulement l’effet de la consommation comptable cette année.",
        "exercise": "f-depreciation",
        "writingGuide": null
      },
      {
        "id": "f-cross-notion",
        "title": "Croiser performance et trésorerie",
        "text": "Manipulation autonome : tracez sur brouillon trois colonnes : performance de la période, entrée/sortie de trésorerie, poste de bilan concerné. Pour chaque opération, justifiez la différence avant de classer. Transférez ensuite à un règlement de créance et à un service payé : aucune nouvelle règle ne sera nécessaire.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-cross"
      },
      {
        "id": "f-cross-exemple",
        "title": "Exemple : Croiser performance et trésorerie",
        "text": "Exemple : emprunt reçu 5 000 € = dette et entrée de banque, sans produit. Loyer du mois consommé et payé 500 € = charge et sortie de banque. Le compte de résultat et la banque répondent à deux questions différentes.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [],
        "formulas": [],
        "exercise": "f-cross"
      },
      {
        "id": "f-cross-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Vente à crédit et amortissement affectent le résultat sans mouvement immédiat de cash. L’emprunt affecte la trésorerie et la dette. Le loyer consommé et payé affecte les deux.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "L’emprunt doit être remboursé : il ne constitue pas un produit.",
        "exercise": "f-cross",
        "writingGuide": null
      },
      {
        "id": "f-revenue-notion",
        "title": "Le chiffre d’affaires n’est pas tous les produits",
        "text": "À retenir : produits moins charges donne le résultat de la période. Chiffre d’affaires, total des produits et encaissements ne sont pas interchangeables. Vous pourrez maintenant reconstruire plusieurs niveaux de résultat.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "objective": "Distinguer performance de période, patrimoine, paiements et investissement.",
        "formula": null,
        "formulas": [],
        "exercise": "f-revenue"
      },
      {
        "id": "f-revenue-exemple",
        "title": "Exemple : Le chiffre d’affaires n’est pas tous les produits",
        "text": "Un fabricant vend un meuble 800 € et reçoit un emprunt de 5 000 €. Le chiffre d’affaires de cette opération est 800 €, même si les deux mouvements peuvent faire entrer de l’argent. Un produit financier n’est pas automatiquement une vente de l’activité habituelle.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "rows": [],
        "formulas": [],
        "exercise": "f-revenue"
      },
      {
        "id": "f-revenue-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le chiffre d’affaires correspond aux ventes de biens et services de l’activité habituelle. Un emprunt n’est pas un produit ; les intérêts reçus sont des produits financiers.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction",
        "pitfall": "Un produit financier peut être un produit sans être du chiffre d’affaires.",
        "exercise": "f-revenue",
        "writingGuide": null
      },
      {
        "id": "fundamentals-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Le rattachement à une période peut créer créances, dettes ou paiements d’avance. Le traitement détaillé dépend du référentiel ; retenez d’abord l’opération économique. Une facture seule ne prouve pas toujours une vente réalisée.",
        "source": "Séance 2, diapositives 1 à 4 ; activité autonome de distinction"
      }
    ],
    "operations": [
      {
        "id": "operations-mission",
        "title": "Exploitation : votre objectif",
        "text": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "source": "Séance 2, diapositives 5 et 6",
        "retain": "Le coût des ventes n’est pas automatiquement les achats. Un sous-total exact repose d’abord sur le bon périmètre."
      },
      {
        "id": "operations-mot-1",
        "title": "Stock",
        "text": "Biens conservés à une date pour être vendus ou utilisés. Le stock final n’est pas entièrement consommé.",
        "source": "Séance 2, diapositives 5 et 6"
      },
      {
        "id": "operations-mot-2",
        "title": "Marge brute",
        "text": "Ventes moins coût des ventes dans le périmètre du document. Ce coût peut inclure du personnel de production.",
        "source": "Séance 2, diapositives 5 et 6"
      },
      {
        "id": "operations-mot-3",
        "title": "Chiffre d’affaires",
        "text": "Ventes de biens et de services de l’activité habituelle, hors taxes dans ces cas. Il ne regroupe pas tous les produits.",
        "source": "Séance 2, diapositives 5 et 6"
      },
      {
        "id": "operations-repere-0",
        "title": "Situer le raisonnement",
        "text": "Cas pédagogiques MobiliPro et Atelier Nova du catalogue pédagogique existant. L’exemple travaillé porte sur des montants différents. Nova demande une reconstruction sur brouillon avant la saisie ; MobiliPro demande aussi de renoncer à une marge non calculable.",
        "source": "Séance 2, diapositives 5 et 6"
      },
      {
        "id": "operations-formule-0",
        "title": "Résultat d’exploitation",
        "text": "Avant de calculer, repérez la période, les composants et l’unité du résultat.",
        "source": "Séance 2, diapositives 5 et 6",
        "formula": {
          "label": "Résultat d’exploitation",
          "expression": "Produits d’exploitation - charges d’exploitation"
        }
      },
      {
        "id": "operations-formule-1",
        "title": "Coût acheté-vendu",
        "text": "Avant de calculer, repérez la période, les composants et l’unité du résultat.",
        "source": "Séance 2, diapositives 5 et 6",
        "formula": {
          "label": "Coût acheté-vendu",
          "expression": "Stock initial + achats - stock final"
        }
      },
      {
        "id": "o-revenue-notion",
        "title": "D’où vient le revenu de l’activité ?",
        "text": "que vend-on réellement pendant la période ? Revenue signifie chiffre d’affaires. Un emprunt augmente la dette et la trésorerie ; il ne rémunère pas une vente. Un règlement ancien éteint une créance. Avant de construire un résultat, identifiez les opérations de l’activité et leur rattachement.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": null,
        "formulas": [],
        "exercise": "o-revenue"
      },
      {
        "id": "o-revenue-exemple",
        "title": "Exemple : D’où vient le revenu de l’activité ?",
        "text": "Une vente réalisée de 10 000 € payée à 30 jours est du chiffre d’affaires aujourd’hui. Recevoir 30 000 € de la banque aujourd’hui est un financement. Aucun des deux montants ne permet seul de connaître le résultat.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [],
        "formulas": [],
        "exercise": "o-revenue"
      },
      {
        "id": "o-revenue-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Seule la vente réalisée de 12 000 € appartient ici au chiffre d’affaires. L’emprunt n’est pas un revenu et le règlement ancien ne crée pas une deuxième vente.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Séparez la réalisation de la vente et l’origine du virement reçu.",
        "exercise": "o-revenue",
        "writingGuide": null
      },
      {
        "id": "o-stock-notion",
        "title": "Achats et coût des ventes",
        "text": "Les achats décrivent des acquisitions de la période ; le coût des ventes décrit le coût de ce qui a effectivement été vendu. Production, stocks et périmètre de coûts rendent le rapprochement plus complexe dans une entreprise industrielle. Ne transposez pas mécaniquement la formule du négoce à tous les cas.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": "Négoce simple : coût acheté-vendu = stock initial + achats - stock final. Le stock final est retranché car il reste à vendre.",
        "formulas": [],
        "exercise": "o-stock"
      },
      {
        "id": "o-stock-exemple",
        "title": "Exemple : Achats et coût des ventes",
        "text": "Négoce simple, sans autres coûts : stock au début 10, achats 60, stock à la fin 15. Coût acheté-vendu = 10 + 60 - 15 = 55. Les biens encore en stock ne sont pas tous consommés par les ventes. Pour une industrie, la composition des coûts doit être précisée.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Stock initial",
            "value": "10 k€",
            "result": false
          },
          {
            "label": "Achats de la période",
            "value": "+ 60 k€",
            "result": false
          },
          {
            "label": "Stock final conservé",
            "value": "- 15 k€",
            "result": false
          },
          {
            "label": "Coût acheté-vendu",
            "value": "10 + 60 - 15 = 55 k€",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Coût acheté-vendu (exemple)",
            "expression": "10 + 60 - 15 = 55"
          }
        ],
        "exercise": "o-stock"
      },
      {
        "id": "o-stock-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "20 + 100 - 30 = 90 k€. Les 30 k€ encore en stock ne sont pas tous un coût des ventes de la période.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Coût vendu = stock initial + achats - stock final, dans ce cas simplifié.",
        "exercise": "o-stock",
        "writingGuide": null
      },
      {
        "id": "o-gross-notion",
        "title": "Construire la marge brute",
        "text": "que reste-t-il des ventes après le coût associé à ce qui a été vendu ? Gross margin signifie marge brute dans la présentation étudiée. Le coût des ventes vient d’abord ; les autres charges opérationnelles viennent ensuite. Ce sous-total n’est ni un résultat net ni, par identité automatique, la marge commerciale des SIG (Soldes intermédiaires de gestion).",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": "Marge brute = chiffre d’affaires - coût des ventes. Résultat opérationnel = marge brute - autres charges opérationnelles (dans ce cas simplifié).",
        "formulas": [],
        "exercise": "o-gross"
      },
      {
        "id": "o-gross-exemple",
        "title": "Exemple : Construire la marge brute",
        "text": "Ventes 100, coût des ventes 65 : marge brute 35. Autres charges opérationnelles 25 : résultat d’exploitation 10. Ce 10 n’est ni la marge brute ni la trésorerie.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "100 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 65 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "100 - 65 = 35 k€",
            "result": false
          },
          {
            "label": "Autres charges opérationnelles",
            "value": "- 25 k€",
            "result": false
          },
          {
            "label": "Résultat d’exploitation",
            "value": "35 - 25 = 10 k€",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Marge brute (exemple)",
            "expression": "100 - 65 = 35"
          },
          {
            "label": "Exploitation (exemple)",
            "expression": "35 - 25 = 10"
          }
        ],
        "exercise": "o-gross"
      },
      {
        "id": "o-gross-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "240 - 144 = 96 k€. Il reste cette marge avant les autres charges opérationnelles.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Marge brute = chiffre d’affaires - coût des ventes.",
        "exercise": "o-gross",
        "writingGuide": null
      },
      {
        "id": "o-costmap-notion",
        "title": "À quel étage placer chaque coût ?",
        "text": "une charge apparaît-elle déjà dans un sous-total ? Une présentation par fonction regroupe par exemple les coûts vendus, commerciaux et administratifs. On ne retranche pas une deuxième fois un salaire déjà compris dans le coût des ventes. Le niveau opérationnel précède les effets financiers et l’impôt.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": null,
        "formulas": [],
        "exercise": "o-costmap"
      },
      {
        "id": "o-costmap-exemple",
        "title": "Exemple : À quel étage placer chaque coût ?",
        "text": "Ventes 100 ; coût des ventes 65, dont salaires de production 20 ; autres frais opérationnels 25. Marge brute 35 ; résultat opérationnel 10. Retirer encore les salaires de 20 compterait deux fois la même charge.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "100 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 65 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "100 - 65 = 35 k€",
            "result": false
          },
          {
            "label": "Autres charges opérationnelles",
            "value": "- 25 k€",
            "result": false
          },
          {
            "label": "Résultat d’exploitation",
            "value": "35 - 25 = 10 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "o-costmap"
      },
      {
        "id": "o-costmap-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le coût vendu et les autres charges opérationnelles forment le périmètre d’exploitation, chacun une seule fois. Intérêts et impôt interviennent ensuite.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Vérifiez la composition du coût des ventes avant de retrancher une charge de production supplémentaire.",
        "exercise": "o-costmap",
        "writingGuide": null
      },
      {
        "id": "o-nova-notion",
        "title": "Atelier Nova : reconstruire un document complet",
        "text": "Manipulation autonome : partez des données et créez vous-même les lignes, sans formule ligne par ligne. Sur brouillon, nommez les deux sous-totaux et indiquez pourquoi vous ne pouvez pas encore annoncer un résultat net. Les données de ce cas ne contiennent ni résultat financier ni impôt.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": "Rappel : marge brute = ventes - coût des ventes ; exploitation = marge brute - autres charges opérationnelles ; taux de marge brute = marge brute / ventes × 100.",
        "formulas": [],
        "exercise": "o-nova"
      },
      {
        "id": "o-nova-exemple",
        "title": "Exemple : Atelier Nova : reconstruire un document complet",
        "text": "Cas travaillé différent : ventes 150, coût vendu 90, autres charges opérationnelles 45. Marge brute 60 ; exploitation 15. Le résultat net reste inconnu tant que finance et impôt manquent.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "150 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 90 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "150 - 90 = 60 k€",
            "result": false
          },
          {
            "label": "Autres charges",
            "value": "- 45 k€",
            "result": false
          },
          {
            "label": "Exploitation",
            "value": "60 - 45 = 15 k€",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Marge brute (exemple)",
            "expression": "150 - 90 = 60"
          },
          {
            "label": "Exploitation (exemple)",
            "expression": "60 - 45 = 15"
          }
        ],
        "exercise": "o-nova"
      },
      {
        "id": "o-nova-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Nova : chiffre d’affaires 240 ; marge brute 96 ; exploitation 30 k€. Le coût des ventes et les autres charges sont distincts. Le résultat net ne peut pas être déduit sans les autres étages.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Reconstruisez ventes moins coût vendu, puis retranchez uniquement les autres charges opérationnelles.",
        "exercise": "o-nova",
        "writingGuide": null
      },
      {
        "id": "o-mobilipro-notion",
        "title": "MobiliPro : utiliser seulement les données disponibles",
        "text": "MobiliPro, cas pédagogique du catalogue pédagogique : vous disposez seulement de totaux d’exploitation. Calculez ce qu’ils permettent réellement, puis préparez une demande d’information au contrôleur de gestion. Notez la période, le périmètre et l’unité. Un total de charges ne fournit pas automatiquement un coût des ventes fiable.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": "Résultat d’exploitation = produits d’exploitation - charges d’exploitation. Le détail manquant empêche de calculer une marge brute fiable.",
        "formulas": [],
        "exercise": "o-mobilipro"
      },
      {
        "id": "o-mobilipro-exemple",
        "title": "Exemple : MobiliPro : utiliser seulement les données disponibles",
        "text": "Exemple distinct, en k€ : ventes 150, coût vendu 90, autres charges 45. Marge brute = 150 - 90 = 60 ; exploitation = 60 - 45 = 15. Les frais inclus dans le coût vendu ne sont pas retirés deux fois.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "150 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 90 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "150 - 90 = 60 k€",
            "result": false
          },
          {
            "label": "Autres charges",
            "value": "- 45 k€",
            "result": false
          },
          {
            "label": "Exploitation",
            "value": "60 - 45 = 15 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "o-mobilipro"
      },
      {
        "id": "o-mobilipro-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "651 500 - 538 300 = 113 200 €. Ce résultat positif décrit la performance d’exploitation, sans établir le cash disponible.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Soustrayez les charges d’exploitation des produits d’exploitation.",
        "exercise": "o-mobilipro",
        "writingGuide": null
      },
      {
        "id": "o-mobili-limit-notion",
        "title": "Identifier une information manquante",
        "text": "Analyse : formulez oralement une demande de données au contrôleur de gestion. Précisez le poste recherché, la période, le périmètre et l’unité. Une bonne question d’information vaut mieux qu’un calcul exact sur un mauvais périmètre.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": null,
        "formulas": [],
        "exercise": "o-mobili-limit"
      },
      {
        "id": "o-mobili-limit-exemple",
        "title": "Exemple : Identifier une information manquante",
        "text": "Une société ne fournit que ventes 500 et charges opérationnelles 450. L’exploitation vaut 50. Sans détail de ce qui est vendu et de son coût, on ne peut pas isoler sa marge brute.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "150 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 90 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "150 - 90 = 60 k€",
            "result": false
          },
          {
            "label": "Autres charges",
            "value": "- 45 k€",
            "result": false
          },
          {
            "label": "Exploitation",
            "value": "60 - 45 = 15 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "o-mobili-limit"
      },
      {
        "id": "o-mobili-limit-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le résultat d’exploitation est connu, la marge brute ne l’est pas. Les achats ne sont pas nécessairement le coût des ventes.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Ne confondez pas résultat d’exploitation et marge brute.",
        "exercise": "o-mobili-limit",
        "writingGuide": null
      },
      {
        "id": "o-checkpoint-notion",
        "title": "Checkpoint 1 : diagnostic intégré",
        "text": "Checkpoint de raisonnement : avant la saisie, justifiez une fois chaque famille de réponses sur brouillon. Le diagnostic signale les thèmes à reprendre, sans donner toutes les solutions après la première erreur. Les résultats orientent les révisions sans limiter la navigation.",
        "source": "Séance 2, diapositives 5 et 6",
        "objective": "Passer des ventes au coût vendu, à la marge brute puis à l’exploitation ; signaler les données manquantes.",
        "formula": null,
        "formulas": [],
        "exercise": "o-checkpoint"
      },
      {
        "id": "o-checkpoint-exemple",
        "title": "Exemple : Checkpoint 1 : diagnostic intégré",
        "text": "Exemple distinct, en k€ : ventes 150, coût vendu 90, autres charges 45. Marge brute = 150 - 90 = 60 ; exploitation = 60 - 45 = 15. Les frais inclus dans le coût vendu ne sont pas retirés deux fois.",
        "source": "Séance 2, diapositives 5 et 6",
        "rows": [
          {
            "label": "Ventes",
            "value": "150 k€",
            "result": false
          },
          {
            "label": "Coût vendu",
            "value": "- 90 k€",
            "result": false
          },
          {
            "label": "Marge brute",
            "value": "150 - 90 = 60 k€",
            "result": false
          },
          {
            "label": "Autres charges",
            "value": "- 45 k€",
            "result": false
          },
          {
            "label": "Exploitation",
            "value": "60 - 45 = 15 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "o-checkpoint"
      },
      {
        "id": "o-checkpoint-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Checkpoint franchi : utilisez le diagnostic par thème pour expliquer une erreur éventuelle avant de poursuivre.",
        "source": "Séance 2, diapositives 5 et 6",
        "pitfall": "Reprenez les distinctions performance/cash, coût vendu/achats et les deux sous-totaux. Pour 0-4, reprenez les exemples puis utilisez le mini-check différent.",
        "exercise": "o-checkpoint",
        "writingGuide": null
      },
      {
        "id": "operations-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Approfondir : dans l’industrie, le coût des ventes peut inclure des coûts de production et dépend des variations de produits finis. Sans ces données, annoncez la limite plutôt que de fabriquer une marge.",
        "source": "Séance 2, diapositives 5 et 6"
      }
    ],
    "final-result": [
      {
        "id": "final-result-mission",
        "title": "Résultat final : votre objectif",
        "text": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "retain": "L’activité forme un niveau opérationnel ; finance et impôt conduisent au net. L’attribution, la distribution et le paiement restent trois questions différentes."
      },
      {
        "id": "final-result-mot-1",
        "title": "RCAI",
        "text": "Résultat courant avant impôts : exploitation + résultat financier dans les cas français étudiés.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      },
      {
        "id": "final-result-mot-2",
        "title": "Bénéfice par action",
        "text": "Bénéfice attribuable divisé par le nombre d’actions retenu dans le cas simplifié. Il ne promet pas un dividende.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      },
      {
        "id": "final-result-mot-3",
        "title": "Dividende",
        "text": "Part de bénéfice dont la distribution est décidée. Décision et paiement sont distincts du calcul du résultat.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      },
      {
        "id": "final-result-mot-4",
        "title": "Participation",
        "text": "Part du résultat revenant aux salariés selon les règles applicables. Elle se déduit pour passer au résultat net lorsqu’elle est fournie.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      },
      {
        "id": "final-result-repere-0",
        "title": "Situer le raisonnement",
        "text": "Maison Éclat provient du Guide final. Votre mission est moins guidée que Nova : sélectionnez les données, construisez le compte, puis expliquez une limite de décision. Tous les montants du dossier sont en k€, sauf le bénéfice par action en euros.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      },
      {
        "id": "final-result-formule-0",
        "title": "Résultat avant impôt (cas simplifié)",
        "text": "Avant de calculer, repérez la période, les composants et l’unité du résultat.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "formula": {
          "label": "Résultat avant impôt (cas simplifié)",
          "expression": "Résultat d’exploitation + résultat financier"
        }
      },
      {
        "id": "final-result-formule-1",
        "title": "Résultat net (cas simplifié)",
        "text": "Avant de calculer, repérez la période, les composants et l’unité du résultat.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "formula": {
          "label": "Résultat net (cas simplifié)",
          "expression": "Résultat avant impôt - impôt"
        }
      },
      {
        "id": "r-finance-boundary-notion",
        "title": "Identifier le périmètre du résultat",
        "text": "que gagne l’activité avant le coût de son financement et l’impôt ? EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) désigne ce niveau selon le périmètre retenu. Dans notre cas simple, il coïncide avec l’exploitation. Ajoutez ensuite produits financiers et charges financières pour l’avant impôt ; soustrayez l’impôt pour le net. N’imposez pas cette identité de périmètre à tout document publié. Dans nos cas, aucun résultat exceptionnel ni participation n’est donné. La formule avant impôt est donc simplifiée ; un dossier complet peut comporter d’autres rubriques.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": "Avant impôt = exploitation + produits financiers - charges financières ; net = avant impôt - impôt, dans les cas simplifiés présentés.",
        "formulas": [],
        "exercise": "r-finance-boundary"
      },
      {
        "id": "r-finance-boundary-exemple",
        "title": "Exemple : Identifier le périmètre du résultat",
        "text": "Exploitation 50 ; résultat financier -4 ; impôt 12 : résultat avant impôt 46, résultat net 34. Un remboursement de capital ne s’ajoute pas aux charges financières.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Résultat d’exploitation",
            "value": "50 k€",
            "result": false
          },
          {
            "label": "Produits financiers",
            "value": "2 k€",
            "result": false
          },
          {
            "label": "Charges financières",
            "value": "6 k€",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": "2 - 6 = -4 k€",
            "result": false
          },
          {
            "label": "Avant impôt",
            "value": "50 + (-4) = 46 k€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 12 k€",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": "46 - 12 = 34 k€",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Avant impôt (exemple)",
            "expression": "50 + (-4) = 46"
          },
          {
            "label": "Net (exemple)",
            "expression": "46 - 12 = 34"
          }
        ],
        "exercise": "r-finance-boundary"
      },
      {
        "id": "r-finance-boundary-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Les salaires relèvent de l’exploitation, les intérêts de la finance, l’impôt du résultat après impôt, et l’emprunt reçu du financement au bilan.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "Financer n’est pas exploiter ; recevoir le capital emprunté n’est pas un produit.",
        "exercise": "r-finance-boundary",
        "writingGuide": null
      },
      {
        "id": "r-maison-notion",
        "title": "Maison Éclat : mission autonome du résultat au net",
        "text": "Mission autonome issue du Guide : moins de guidage que Nova. Toutes les consommations et dotations utiles sont fournies ; aucune autre charge n’est à inventer. Identifiez les données qui relèvent du bilan ou des flux, construisez les niveaux, puis expliquez ce que le bénéfice ne prouve pas. Ne remplacez pas les ventes par les encaissements. Hypothèses : les 180 k€ sont les consommations rattachées aux ventes ; les 20 k€ incluent toutes les dotations de la période. Ne pas ajouter une seconde dotation pour l’équipement acheté.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": "Rappel : exploitation = ventes - consommations - personnel - autres charges - dotations ; avant impôt = exploitation + résultat financier ; net = avant impôt - impôt.",
        "formulas": [],
        "exercise": "r-maison"
      },
      {
        "id": "r-maison-exemple",
        "title": "Exemple : Maison Éclat : mission autonome du résultat au net",
        "text": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Résultat d’exploitation",
            "value": "50 k€",
            "result": false
          },
          {
            "label": "Produits financiers",
            "value": "2 k€",
            "result": false
          },
          {
            "label": "Charges financières",
            "value": "6 k€",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": "2 - 6 = -4 k€",
            "result": false
          },
          {
            "label": "Avant impôt",
            "value": "50 + (-4) = 46 k€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 12 k€",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": "46 - 12 = 34 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "r-maison"
      },
      {
        "id": "r-maison-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Maison Éclat : 90 d’exploitation, 82 avant impôt, 57 de résultat net, en k€. L’emprunt finance l’activité ; l’équipement est un actif à l’achat ; la consommation du matériel est déjà représentée par la dotation donnée. Les encaissements 440 ne remplacent pas les ventes 500.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "Excluez emprunt et achat d’équipement du résultat immédiat. Construisez ensuite exploitation, finance, impôt.",
        "exercise": "r-maison",
        "writingGuide": null
      },
      {
        "id": "r-eps-notion",
        "title": "Bénéfice par action et distribution",
        "text": "EPS (Earnings Per Share - bénéfice par action) rapporte le résultat attribuable aux actionnaires au nombre d’actions pertinent, généralement pondéré sur la période. La distribution dépend d’une décision et d’autres contraintes. Résultat net, bénéfice par action et dividende sont trois objets distincts.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": "Bénéfice par action = résultat attribuable aux actionnaires / nombre d’actions pertinent. Le numérateur est un bénéfice, le dénominateur un nombre d’actions, le résultat s’exprime en euros par action.",
        "formulas": [
          {
            "label": "Bénéfice par action (cas donné)",
            "numerator": "Résultat attribuable aux actions considérées",
            "denominator": "Nombre d’actions de même droit sur la période"
          }
        ],
        "exercise": "r-eps"
      },
      {
        "id": "r-eps-exemple",
        "title": "Exemple : Bénéfice par action et distribution",
        "text": "Exemple distinct : bénéfice attribuable 120 €, 40 actions : 120 / 40 = 3 € par action. Chaque action correspond à 3 € de bénéfice comptable ; aucun dividende n’est garanti.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Bénéfice attribuable",
            "value": "120 €",
            "result": false
          },
          {
            "label": "Nombre d’actions",
            "value": "40",
            "result": false
          },
          {
            "label": "Bénéfice par action",
            "value": "120 / 40 = 3 €/action",
            "result": true
          }
        ],
        "formulas": [
          {
            "label": "Bénéfice par action (exemple)",
            "numerator": "120 €",
            "denominator": "40 actions",
            "multiplier": "= 3 € par action"
          }
        ],
        "exercise": "r-eps"
      },
      {
        "id": "r-eps-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "57 000 / 30 000 = 1,90 € par action. C’est un bénéfice par action, pas une promesse de dividende.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "Divisez le bénéfice attribuable par le nombre d’actions pertinent.",
        "exercise": "r-eps",
        "writingGuide": null
      },
      {
        "id": "r-dividend-notion",
        "title": "Ne pas promettre un dividende",
        "text": "un bénéfice attribuable par action mesure une performance ramenée à une action, pas un virement. Une distribution dépend d’une décision, des règles applicables et de la capacité de paiement. Comparez le sens des affirmations, pas seulement le nombre de 1,90 €.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": null,
        "formulas": [],
        "exercise": "r-dividend"
      },
      {
        "id": "r-dividend-exemple",
        "title": "Exemple : Ne pas promettre un dividende",
        "text": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Résultat d’exploitation",
            "value": "50 k€",
            "result": false
          },
          {
            "label": "Produits financiers",
            "value": "2 k€",
            "result": false
          },
          {
            "label": "Charges financières",
            "value": "6 k€",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": "2 - 6 = -4 k€",
            "result": false
          },
          {
            "label": "Avant impôt",
            "value": "50 + (-4) = 46 k€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 12 k€",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": "46 - 12 = 34 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "r-dividend"
      },
      {
        "id": "r-dividend-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Un bénéfice peut être conservé ou distribué en partie. Le dividende ne se déduit pas automatiquement du bénéfice par action.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "La distribution n’est pas la formation du bénéfice.",
        "exercise": "r-dividend",
        "writingGuide": null
      },
      {
        "id": "r-distribution-notion",
        "title": "Bénéfice, mise en réserve et dividende",
        "text": "ce que l’entreprise gagne est-il identique à ce qu’elle verse aux associés ? Le bénéfice peut être conservé ou distribué selon les décisions et règles applicables. Une distribution ne devient pas une charge du compte de résultat. Un bénéfice par action n’est pas une promesse de paiement.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": null,
        "formulas": [],
        "exercise": "r-distribution"
      },
      {
        "id": "r-distribution-exemple",
        "title": "Exemple : Bénéfice, mise en réserve et dividende",
        "text": "Bénéfice 100, distribution décidée 30, conservation 70 : le résultat reste 100. Le calendrier du paiement et la trésorerie disponible constituent des questions séparées.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Bénéfice de la période",
            "value": "100 k€",
            "result": false
          },
          {
            "label": "Distribution décidée",
            "value": "30 k€",
            "result": false
          },
          {
            "label": "Bénéfice conservé",
            "value": "100 - 30 = 70 k€",
            "result": false
          },
          {
            "label": "Résultat de la période",
            "value": "Toujours 100 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "r-distribution"
      },
      {
        "id": "r-distribution-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le résultat reste 57 k€ ; les 20 k€ décrivent une affectation. La distribution exige aussi d’examiner décision, règles et trésorerie, sans déduire le paiement du seul bénéfice.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "Ne mélangez pas calcul de la performance et décision de distribution.",
        "exercise": "r-distribution",
        "writingGuide": null
      },
      {
        "id": "r-note-notion",
        "title": "Expliquer une limite avant une décision",
        "text": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "objective": "Reconstruire le pont finance-impôt-net et distinguer résultat, distribution et bénéfice par action.",
        "formula": null,
        "formulas": [],
        "exercise": "r-note"
      },
      {
        "id": "r-note-exemple",
        "title": "Exemple : Expliquer une limite avant une décision",
        "text": "Exemple distinct, en k€ : exploitation 50, produits financiers 2, intérêts 6. Finance = 2 - 6 = -4 ; avant impôt = 50 + (-4) = 46 ; impôt 12 ; net = 46 - 12 = 34. Ce bénéfice ne prouve pas un paiement.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "rows": [
          {
            "label": "Résultat d’exploitation",
            "value": "50 k€",
            "result": false
          },
          {
            "label": "Produits financiers",
            "value": "2 k€",
            "result": false
          },
          {
            "label": "Charges financières",
            "value": "6 k€",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": "2 - 6 = -4 k€",
            "result": false
          },
          {
            "label": "Avant impôt",
            "value": "50 + (-4) = 46 k€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 12 k€",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": "46 - 12 = 34 k€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "r-note"
      },
      {
        "id": "r-note-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Vous avez distingué une performance, des mouvements et une affectation. Le modèle est une proposition de raisonnement ; il ne démontre pas une capacité à payer.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés",
        "pitfall": "Utilisez le décalage ventes/encaissements et nommez le document ou calendrier à vérifier.",
        "exercise": "r-note",
        "writingGuide": {
          "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
          "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
          "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
          "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
          "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
          "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
          "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
        }
      },
      {
        "id": "final-result-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Approfondir : le résultat attribuable et le nombre moyen pondéré d’actions doivent être cohérents. Actions dilutives et éléments non récurrents demandent une analyse séparée, non nécessaire au cas simplifié.",
        "source": "Séance 2, diapositives 7 à 18 ; compléments pédagogiques fiabilisés"
      }
    ],
    "analysis": [
      {
        "id": "analysis-mission",
        "title": "Analyse : votre objectif",
        "text": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "retain": "Une croissance des ventes peut accompagner une dégradation de rentabilité. Observation -> hypothèse -> information à vérifier."
      },
      {
        "id": "analysis-mot-1",
        "title": "Ratio",
        "text": "Rapport entre deux données cohérentes. Un ratio est un outil d’analyse, pas un quatrième état financier.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global"
      },
      {
        "id": "analysis-mot-2",
        "title": "Point de pourcentage",
        "text": "Différence entre deux taux : de 20 % à 15 %, baisse de 5 points. La baisse relative est de 25 %.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global"
      },
      {
        "id": "analysis-repere-0",
        "title": "Situer le raisonnement",
        "text": "Mydeco et Global : cas comparatifs pédagogiques adaptés du catalogue pédagogique, non données d’entreprises réelles. Calculez sur brouillon, nommez chaque taux et rédigez une note courte.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global"
      },
      {
        "id": "a-mydeco-notion",
        "title": "Mydeco : croissance et rentabilité",
        "text": "vendre plus signifie-t-il gagner plus ou devenir plus rentable ? Comparez d’abord les montants, puis un taux qui rapporte le même niveau de résultat aux ventes. Cas Mydeco / Global du catalogue pédagogique, adaptés à des fins pédagogiques : aucune conclusion sur une entreprise réelle.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "formula": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100. Le chiffre d’affaires au dénominateur fixe une base de 100 € de ventes. Croissance d’un montant = (montant final - montant initial) / montant initial × 100 ; variation d’un taux en points = taux final - taux initial.",
        "formulas": [
          {
            "label": "Marge opérationnelle",
            "numerator": "Résultat d’exploitation",
            "denominator": "Chiffre d’affaires",
            "multiplier": "× 100"
          },
          {
            "label": "Croissance",
            "numerator": "Montant final - montant initial",
            "denominator": "Montant initial",
            "multiplier": "× 100"
          },
          {
            "label": "Variation en points",
            "expression": "Taux final - taux initial"
          },
          {
            "label": "Variation relative du taux",
            "numerator": "Taux final - taux initial",
            "denominator": "Taux initial",
            "multiplier": "× 100"
          }
        ],
        "exercise": "a-mydeco"
      },
      {
        "id": "a-mydeco-exemple",
        "title": "Exemple : Mydeco : croissance et rentabilité",
        "text": "Exemple distinct : ventes 100 puis 120 ; exploitation 20 puis 18. Taux initial 20 / 100 × 100 = 20 % ; final 18 / 120 × 100 = 15 %. Croissance des ventes (120 - 100) / 100 × 100 = 20 % ; exploitation (18 - 20) / 20 × 100 = -10 %. Écart de taux 15 - 20 = -5 points ; variation relative (15 - 20) / 20 × 100 = -25 %. Une hausse des coûts pourrait l’expliquer ; vérifier coûts et mix.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "rows": [
          {
            "label": "Taux initial",
            "value": "20 / 100 × 100 = 20 %",
            "result": false
          },
          {
            "label": "Taux final",
            "value": "18 / 120 × 100 = 15 %",
            "result": false
          },
          {
            "label": "Écart des taux",
            "value": "15 - 20 = -5 points",
            "result": false
          },
          {
            "label": "Variation relative du taux",
            "value": "(15 - 20) / 20 × 100 = -25 %",
            "result": false
          },
          {
            "label": "Croissance des ventes",
            "value": "(120 - 100) / 100 × 100 = +20 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "a-mydeco"
      },
      {
        "id": "a-mydeco-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "108 / 1 200 × 100 = 9 %, contre 12 % en N-1. Les ventes progressent de 20 %, mais le résultat d’exploitation baisse de 10 %.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "pitfall": "Marge opérationnelle = résultat d’exploitation / chiffre d’affaires × 100.",
        "exercise": "a-mydeco",
        "writingGuide": null
      },
      {
        "id": "a-global-notion",
        "title": "Global : suivre le bon indicateur",
        "text": "Manipulation : sur brouillon, écrivez séparément variation des ventes, variation du résultat et variation du taux en points. Comparez ensuite Mydeco et Global avec le même numérateur. Une baisse de deux points n’est pas une baisse relative de 2 %. Une marge brute et une marge nette ne sont pas comparables sans qualification. Pour un taux passant de 15 % à 12 %, la variation est -3 points. La variation relative est (12 - 15) / 15 × 100 = -20 %. Le taux initial doit être non nul.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "formula": "Rappel : taux opérationnel = exploitation / ventes × 100 ; croissance = (final - initial) / initial × 100 ; différence de taux en points = taux final - taux initial. À base zéro, le taux de croissance n’est pas calculable par cette formule.",
        "formulas": [
          {
            "label": "Marge opérationnelle",
            "numerator": "Résultat d’exploitation",
            "denominator": "Chiffre d’affaires",
            "multiplier": "× 100"
          },
          {
            "label": "Croissance",
            "numerator": "Montant final - montant initial",
            "denominator": "Montant initial",
            "multiplier": "× 100"
          },
          {
            "label": "Variation en points",
            "expression": "Taux final - taux initial"
          },
          {
            "label": "Variation relative du taux",
            "numerator": "Taux final - taux initial",
            "denominator": "Taux initial",
            "multiplier": "× 100"
          }
        ],
        "exercise": "a-global"
      },
      {
        "id": "a-global-exemple",
        "title": "Exemple : Global : suivre le bon indicateur",
        "text": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "rows": [
          {
            "label": "Taux initial",
            "value": "20 / 100 × 100 = 20 %",
            "result": false
          },
          {
            "label": "Taux final",
            "value": "18 / 120 × 100 = 15 %",
            "result": false
          },
          {
            "label": "Écart des taux",
            "value": "15 - 20 = -5 points",
            "result": false
          },
          {
            "label": "Variation relative du taux",
            "value": "(15 - 20) / 20 × 100 = -25 %",
            "result": false
          },
          {
            "label": "Croissance des ventes",
            "value": "(120 - 100) / 100 × 100 = +20 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "a-global"
      },
      {
        "id": "a-global-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "92 / 1 150 = 8 %. Les ventes augmentent de 15 % mais la marge passe de 10 % à 8 %, soit -2 points, pas -2 %.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "pitfall": "Utilisez les ventes de la même année que le résultat.",
        "exercise": "a-global",
        "writingGuide": null
      },
      {
        "id": "a-method-notion",
        "title": "Observation, hypothèse, vérification",
        "text": "Méthode explicite : Observation -> Hypothèse -> Information à vérifier. L’observation décrit un fait mesuré. L’hypothèse propose une explication conditionnelle. L’information à vérifier doit permettre de départager des explications : coût unitaire, prix, volume, mix ou périmètre. Ne choisissez pas d’abord une décision pour chercher ensuite des chiffres qui la justifient.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "formula": null,
        "formulas": [],
        "exercise": "a-method"
      },
      {
        "id": "a-method-exemple",
        "title": "Exemple : Observation, hypothèse, vérification",
        "text": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "rows": [
          {
            "label": "Taux initial",
            "value": "20 / 100 × 100 = 20 %",
            "result": false
          },
          {
            "label": "Taux final",
            "value": "18 / 120 × 100 = 15 %",
            "result": false
          },
          {
            "label": "Écart des taux",
            "value": "15 - 20 = -5 points",
            "result": false
          },
          {
            "label": "Variation relative du taux",
            "value": "(15 - 20) / 20 × 100 = -25 %",
            "result": false
          },
          {
            "label": "Croissance des ventes",
            "value": "(120 - 100) / 100 × 100 = +20 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "a-method"
      },
      {
        "id": "a-method-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "L’observation décrit. L’hypothèse explique sous condition. L’information à vérifier permet de tester cette explication.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "pitfall": "Une cause possible n’est pas une cause démontrée.",
        "exercise": "a-method",
        "writingGuide": null
      },
      {
        "id": "a-verdict-notion",
        "title": "Un indicateur suffit-il pour trancher ?",
        "text": "À retenir : un ratio isolé n’est ni un classement moral ni un diagnostic complet. Secteur, modèle économique, risque, investissements et trésorerie comptent aussi. Une observation défavorable peut avoir plusieurs causes ; choisissez une information qui les départage.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "formula": null,
        "formulas": [],
        "exercise": "a-verdict"
      },
      {
        "id": "a-verdict-exemple",
        "title": "Exemple : Un indicateur suffit-il pour trancher ?",
        "text": "Ventes en hausse et marge en baisse peuvent refléter un mix différent, une hausse des coûts ou une stratégie commerciale. Les seules deux séries ne permettent pas de décider laquelle de ces explications domine.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "rows": [
          {
            "label": "Taux initial",
            "value": "20 / 100 × 100 = 20 %",
            "result": false
          },
          {
            "label": "Taux final",
            "value": "18 / 120 × 100 = 15 %",
            "result": false
          },
          {
            "label": "Écart des taux",
            "value": "15 - 20 = -5 points",
            "result": false
          },
          {
            "label": "Variation relative du taux",
            "value": "(15 - 20) / 20 × 100 = -25 %",
            "result": false
          },
          {
            "label": "Croissance des ventes",
            "value": "(120 - 100) / 100 × 100 = +20 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "a-verdict"
      },
      {
        "id": "a-verdict-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "La croissance du chiffre d’affaires ne prouve pas l’amélioration de la performance. Une conclusion responsable précise ce qui est observé et ce qui reste à tester.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "pitfall": "Distinguez l’indicateur de taille, le taux de rentabilité et l’explication encore incertaine.",
        "exercise": "a-verdict",
        "writingGuide": null
      },
      {
        "id": "a-note-notion",
        "title": "Rédiger une note de décision prudente",
        "text": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "objective": "Distinguer montant, taux, observation, hypothèse et vérification avant une recommandation.",
        "formula": null,
        "formulas": [],
        "exercise": "a-note"
      },
      {
        "id": "a-note-exemple",
        "title": "Exemple : Rédiger une note de décision prudente",
        "text": "Exemple : exploitation 20 et ventes 100 donnent 20 / 100 × 100 = 20 %. Puis exploitation 18 et ventes 120 donnent 15 %. Le taux baisse de 5 points ; la variation relative du taux est (15 - 20) / 20 × 100 = -25 %. Vérifier coûts et mix avant d’agir.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "rows": [
          {
            "label": "Taux initial",
            "value": "20 / 100 × 100 = 20 %",
            "result": false
          },
          {
            "label": "Taux final",
            "value": "18 / 120 × 100 = 15 %",
            "result": false
          },
          {
            "label": "Écart des taux",
            "value": "15 - 20 = -5 points",
            "result": false
          },
          {
            "label": "Variation relative du taux",
            "value": "(15 - 20) / 20 × 100 = -25 %",
            "result": false
          },
          {
            "label": "Croissance des ventes",
            "value": "(120 - 100) / 100 × 100 = +20 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "a-note"
      },
      {
        "id": "a-note-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Une hypothèse doit rester révisable. Le modèle est une proposition, pas une causalité prouvée.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global",
        "pitfall": "Citez deux nombres comparables ; utilisez « pourrait » ; demandez une donnée précise.",
        "exercise": "a-note",
        "writingGuide": {
          "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
          "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
          "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
          "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
          "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
          "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
          "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
        }
      },
      {
        "id": "analysis-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Approfondir : un effet prix, volume, mix ou change peut affecter ventes et marges différemment. Comparez à périmètre constant ; une corrélation ne démontre pas une causalité.",
        "source": "Séance 2, diapositives 19 à 21 ; simulations Mydeco et Global"
      }
    ],
    "sig": [
      {
        "id": "sig-mission",
        "title": "SIG (Soldes intermédiaires de gestion) : votre objectif",
        "text": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "retain": "Les huit soldes répondent à des questions différentes. Le résultat financier se calcule séparément puis s’ajoute au résultat d’exploitation pour former le RCAI. Les formules simplifiées supposent l’absence des autres éléments indiqués dans le cas. Ni EBE ni résultat net ne prouvent le cash encaissé."
      },
      {
        "id": "sig-mot-1",
        "title": "SIG",
        "text": "Soldes intermédiaires de gestion : étapes qui expliquent la formation du résultat dans une grille française.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-2",
        "title": "Marge commerciale",
        "text": "Ventes de marchandises moins coût d’achat des marchandises vendues. Elle concerne l’achat-revente.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-3",
        "title": "Production immobilisée",
        "text": "Production réalisée par l’entreprise pour son propre usage durable. Elle ne correspond pas à une vente encaissée.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-4",
        "title": "Consommations externes",
        "text": "Biens et services consommés provenant de tiers. Dans Noma : matières consommées et services externes.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-5",
        "title": "Valeur ajoutée",
        "text": "Richesse créée après les consommations externes, avant notamment personnel et taxes d’exploitation.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-6",
        "title": "EBE",
        "text": "Excédent brut d’exploitation : valeur ajoutée + subventions d’exploitation - taxes d’exploitation - personnel. Ce n’est pas un solde bancaire.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-7",
        "title": "Dépréciation",
        "text": "Constat comptable d’une perte de valeur d’un actif ; elle se distingue de l’usure planifiée.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-8",
        "title": "Provision",
        "text": "Constat comptable d’un risque ou d’une obligation dont le montant ou l’échéance est incertain.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-9",
        "title": "Taux de marge",
        "text": "En négoce français : marge commerciale / coût d’achat des marchandises vendues × 100.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-10",
        "title": "Taux de marque",
        "text": "Marge commerciale / ventes de marchandises × 100. Le dénominateur diffère du taux de marge.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-11",
        "title": "RCAI",
        "text": "Résultat courant avant impôts : exploitation + résultat financier dans les cas français étudiés.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-mot-12",
        "title": "EBITDA",
        "text": "Earnings before interest, taxes, depreciation and amortisation : indicateur avant intérêts, impôts et certaines dotations. Sa définition varie ; il n’est pas automatiquement égal à l’EBE.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-repere-0",
        "title": "Situer le raisonnement",
        "text": "Un même résultat de 10 M€ représente 20 % de ventes de 50 M€, mais 0,2 % de ventes de 5 000 M€. Un montant indique un volume. Un ratio permet une comparaison relative, à périmètre comparable.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-repere-1",
        "title": "Situer le raisonnement",
        "text": "Commencez par les taux de marge et de marque. Les SIG (Soldes intermédiaires de gestion) servent ensuite à localiser l’origine de la performance : activité de négoce ou de production, richesse créée, exploitation, finance puis impôt.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-repere-2",
        "title": "Situer le raisonnement",
        "text": "Suivez la chaîne colorée, les formules et le tableau professionnel. L’exemple Atelier Repère explique les passages. Reconstruisez ensuite Atelier Noma sur brouillon avec les données du support, sans ajouter d’opération exceptionnelle.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "s-rates-notion",
        "title": "Marge commerciale et dénominateurs",
        "text": "Pourquoi 10 M€ de résultat ne suffisent-ils pas à comparer deux entreprises ? Rapportez le résultat à une base cohérente. Pour le négoce, le taux de marge rapporte la marge commerciale au coût des marchandises vendues. Le taux de marque la rapporte aux ventes. Ces deux dénominateurs répondent à des questions distinctes.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "Taux de marge du négoce = marge commerciale / coût acheté-vendu × 100 ; taux de marque = marge commerciale / ventes × 100. Le premier mesure la marge rapportée au coût, le second la part des ventes restant après ce coût.",
        "formulas": [
          {
            "label": "Marge commerciale",
            "expression": "Ventes de marchandises - coût acheté-vendu"
          },
          {
            "label": "Taux de marge",
            "numerator": "Marge commerciale",
            "denominator": "Coût acheté-vendu",
            "multiplier": "× 100"
          },
          {
            "label": "Taux de marque",
            "numerator": "Marge commerciale",
            "denominator": "Ventes de marchandises",
            "multiplier": "× 100"
          }
        ],
        "exercise": "s-rates"
      },
      {
        "id": "s-rates-exemple",
        "title": "Exemple : Marge commerciale et dénominateurs",
        "text": "Négoce repère : ventes 160, coût acheté-vendu 100. La marge est 60. Rapportée au coût, elle donne 60 %. Rapportée aux ventes, elle donne 37,5 %. Appliquez ensuite les formules aux données de votre activité.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Ventes",
            "value": "160 k€",
            "result": false
          },
          {
            "label": "Coût acheté-vendu",
            "value": "100 k€",
            "result": false
          },
          {
            "label": "Marge commerciale",
            "value": "160 - 100 = 60 k€",
            "result": false
          },
          {
            "label": "Taux de marge",
            "value": "60 / 100 × 100 = 60 %",
            "result": false
          },
          {
            "label": "Taux de marque",
            "value": "60 / 160 × 100 = 37,5 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "s-rates"
      },
      {
        "id": "s-rates-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "150 - 100 = 50 ; 50 / 100 = 50 % de taux de marge ; 50 / 150 = 33,3 % de taux de marque.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "Le taux de marge utilise le coût acheté-vendu ; le taux de marque utilise les ventes.",
        "exercise": "s-rates",
        "writingGuide": null
      },
      {
        "id": "s-commercial-notion",
        "title": "Atelier Noma : achat-revente et production",
        "text": "que reste-t-il de l’achat-revente après le coût des marchandises vendues ? La marge commerciale répond à cette question dans les SIG (Soldes intermédiaires de gestion). Cette grille française, liée au PCG (Plan comptable général), ne se superpose pas automatiquement aux états IFRS (International Financial Reporting Standards - normes internationales d’information financière). Gross margin signifie marge brute ; son périmètre doit être examiné avant tout rapprochement.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "Marge commerciale = ventes de marchandises - coût d’achat des marchandises vendues. Elle concerne l’achat-revente.",
        "formulas": [],
        "exercise": "s-commercial"
      },
      {
        "id": "s-commercial-methode-0",
        "title": "Marge commerciale : méthode",
        "text": "Solde de l’activité de négoce. Le coût acheté-vendu tient compte du stock initial et du stock final.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Que reste-t-il de l’achat-revente après le coût des marchandises vendues ?",
        "formula": {
          "label": "Marge commerciale",
          "expression": "Ventes de marchandises - coût d’achat des marchandises vendues"
        },
        "exercise": "s-commercial",
        "documentReference": "Dans le tableau Noma : ventes de marchandises, coût acheté-vendu, puis premier sous-total. Ne confondez pas achats et coût des marchandises vendues."
      },
      {
        "id": "s-commercial-exemple",
        "title": "Marge commerciale : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Atelier Repère conserve 80 k€ après le coût acheté-vendu, avant les autres consommations et charges.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Ventes de marchandises",
            "value": 260,
            "sign": "",
            "result": false
          },
          {
            "label": "Coût acheté-vendu",
            "value": 180,
            "sign": "-",
            "result": false
          },
          {
            "label": "Marge commerciale",
            "value": 80,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-commercial"
      },
      {
        "id": "s-commercial-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "300 - 180 = 120 k€. La marge brute d’un groupe industriel ne se confond pas automatiquement avec cette marge commerciale.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "La marge commerciale isole l’achat-revente de marchandises.",
        "exercise": "s-commercial",
        "writingGuide": null
      },
      {
        "id": "s-production-notion",
        "title": "Reconnaître la production de l’exercice",
        "text": "Atelier Noma est un cas mixte du Guide : négoce et production. La production de l’exercice comprend vendue, stockée et immobilisée. Les achats de la période ne sont pas nécessairement le coût acheté-vendu ; les stocks et consommations doivent être rapprochés. Construisez la carte entière sur brouillon, avant d’en saisir les soldes.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "Production de l’exercice = production vendue + production stockée + production immobilisée.",
        "formulas": [],
        "exercise": "s-production"
      },
      {
        "id": "s-production-methode-0",
        "title": "Production de l’exercice : méthode",
        "text": "Elle comprend la production vendue, la variation de production stockée et la production immobilisée. Une variation stockée négative réduit ce total.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Toute la production de la période a-t-elle été vendue ?",
        "formula": {
          "label": "Production de l’exercice",
          "expression": "Production vendue + production stockée + production immobilisée"
        },
        "exercise": "s-production",
        "documentReference": "Repérez les trois lignes de production et leur sous-total. Le négoce et la production sont distincts dans ce cas mixte."
      },
      {
        "id": "s-production-exemple",
        "title": "Production de l’exercice : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Atelier Repère produit 156 k€. Ce total ne mesure ni les ventes seules ni un encaissement.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Production vendue",
            "value": 160,
            "sign": "",
            "result": false
          },
          {
            "label": "Production stockée (variation)",
            "value": -8,
            "sign": "+",
            "result": false
          },
          {
            "label": "Production immobilisée",
            "value": 4,
            "sign": "+",
            "result": false
          },
          {
            "label": "Production de l’exercice",
            "value": 156,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-production"
      },
      {
        "id": "s-production-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "200 + 20 + 10 = 230 k€. La production stockée ou immobilisée n’est pas du chiffre d’affaires encaissé.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "Ajoutez production vendue, stockée et immobilisée, avec leur signe.",
        "exercise": "s-production",
        "writingGuide": null
      },
      {
        "id": "s-va-notion",
        "title": "La richesse créée après consommations externes",
        "text": "Valeur ajoutée : que crée l’organisation après les biens et services consommés provenant de tiers ? Elle permet ensuite de comprendre la rémunération des salariés, les taxes et le surplus d’exploitation.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "Valeur ajoutée = marge commerciale + production de l’exercice - consommations de biens et services de tiers.",
        "formulas": [],
        "exercise": "s-va"
      },
      {
        "id": "s-va-methode-0",
        "title": "Valeur ajoutée : méthode",
        "text": "La valeur ajoutée retire les matières et services externes de la marge commerciale et de la production. Le personnel n’est pas encore retranché.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Quelle richesse l’organisation crée-t-elle après les consommations provenant de tiers ?",
        "formula": {
          "label": "Valeur ajoutée",
          "expression": "Marge commerciale + production de l’exercice - consommations externes"
        },
        "exercise": "s-va",
        "documentReference": "Repérez les matières et services, puis le sous-total Valeur ajoutée. Retirer ici le personnel ferait sauter un étage."
      },
      {
        "id": "s-va-exemple",
        "title": "Valeur ajoutée : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Atelier Repère crée 136 k€ après consommations externes. Ce montant servira notamment à rémunérer le travail et à couvrir les taxes d’exploitation.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Marge commerciale",
            "value": 80,
            "sign": "",
            "result": false
          },
          {
            "label": "Production de l’exercice",
            "value": 156,
            "sign": "+",
            "result": false
          },
          {
            "label": "Matières et services externes",
            "value": 100,
            "sign": "-",
            "result": false
          },
          {
            "label": "Valeur ajoutée",
            "value": 136,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-va"
      },
      {
        "id": "s-va-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "La valeur ajoutée est 220 k€, pas le chiffre d’affaires. Elle mesure ici la richesse créée après consommations externes.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "120 + 230 - 70 - 60. Le personnel n’est pas encore retiré à ce niveau.",
        "exercise": "s-va",
        "writingGuide": null
      },
      {
        "id": "s-ebe-notion",
        "title": "Du partage de la valeur au surplus d’exploitation",
        "text": "que reste-t-il de la richesse créée après personnel et taxes d’exploitation, en tenant compte des subventions ? EBE (Excédent brut d’exploitation) : valeur ajoutée + subventions - taxes d’exploitation - personnel, dans le cas simplifié. Ce surplus comptable n’est pas la trésorerie : délais clients/fournisseurs et stocks subsistent. Les dotations à l’usure et aux risques viennent ensuite.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "EBE (Excédent brut d’exploitation) = valeur ajoutée + subventions d’exploitation - taxes d’exploitation - charges de personnel.",
        "formulas": [],
        "exercise": "s-ebe"
      },
      {
        "id": "s-ebe-methode-0",
        "title": "EBE (Excédent brut d’exploitation) : méthode",
        "text": "Surplus comptable brut lié à l’exploitation, tenant compte des subventions. Il ne garantit pas une entrée de trésorerie.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Que dégage l’exploitation après le personnel et les taxes, avant les dotations ?",
        "formula": {
          "label": "EBE",
          "expression": "Valeur ajoutée + subventions d’exploitation - impôts et taxes d’exploitation - charges de personnel"
        },
        "exercise": "s-ebe",
        "documentReference": "Dans le tableau, l’EBE précède les dotations. Les taxes d’exploitation se distinguent de l’impôt sur les bénéfices situé plus bas."
      },
      {
        "id": "s-ebe-exemple",
        "title": "EBE (Excédent brut d’exploitation) : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Atelier Repère dégage 80 k€ avant usure, risques et finance. Les délais clients/fournisseurs et les stocks peuvent différer des paiements.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Valeur ajoutée",
            "value": 136,
            "sign": "",
            "result": false
          },
          {
            "label": "Subventions d’exploitation",
            "value": 4,
            "sign": "+",
            "result": false
          },
          {
            "label": "Taxes d’exploitation",
            "value": 8,
            "sign": "-",
            "result": false
          },
          {
            "label": "Personnel",
            "value": 52,
            "sign": "-",
            "result": false
          },
          {
            "label": "EBE",
            "value": 80,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-ebe"
      },
      {
        "id": "s-ebe-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "220 + 5 - 10 - 75 = 140 k€. Ce surplus n’est pas un flux de trésorerie : délais clients, fournisseurs et stocks restent à examiner.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "Ajoutez les subventions puis retirez taxes d’exploitation et personnel.",
        "exercise": "s-ebe",
        "writingGuide": null
      },
      {
        "id": "s-noma-bridge-notion",
        "title": "Atelier Noma : reconstruire la fin de la cascade",
        "text": "l’usure et les risques, puis la finance et l’impôt, répondent à des questions différentes. Dans les données simplifiées de Noma, le RCAI (Résultat courant avant impôts) est exploitation + finance. Il ne devient pas une ligne universelle obligatoire des comptes internationaux. Ne reconstituez pas ces SIG (Soldes intermédiaires de gestion) à partir d’intitulés LVMH (Louis Vuitton Moët Hennessy) supposés équivalents. Repères utiles : SIG (Soldes intermédiaires de gestion). L’amortissement répartit le coût d’un actif sur son usage ; la dépréciation constate une perte de valeur ; une provision estime un passif. Une provision ne signifie pas que du cash est bloqué en banque.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": "Rappel dans Noma : exploitation = surplus brut - dotations - autres charges ; RCAI (Résultat courant avant impôts) = exploitation + produits financiers - charges financières ; net = résultat courant - impôt.",
        "formulas": [],
        "exercise": "s-noma-bridge"
      },
      {
        "id": "s-noma-bridge-methode-0",
        "title": "Résultat d’exploitation : méthode",
        "text": "Dans notre cas simplifié, sans reprises ni autres produits : l’EBE est diminué des amortissements, dépréciations/provisions et autres charges d’exploitation.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Quel résultat subsiste après l’usure et les risques de l’activité ?",
        "formula": {
          "label": "Résultat d’exploitation",
          "expression": "EBE - dotations aux amortissements - dépréciations/provisions - autres charges d’exploitation"
        },
        "exercise": "s-noma-bridge",
        "documentReference": "Repérez les dotations et autres charges après l’EBE, puis le résultat d’exploitation."
      },
      {
        "id": "s-noma-bridge-exemple",
        "title": "Résultat d’exploitation : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Les 63 k€ d’Atelier Repère intègrent les charges d’usure et de risque. Une dotation ne signifie pas un nouveau paiement.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "EBE",
            "value": 80,
            "sign": "",
            "result": false
          },
          {
            "label": "Amortissements",
            "value": 12,
            "sign": "-",
            "result": false
          },
          {
            "label": "Dépréciations/provisions",
            "value": 3,
            "sign": "-",
            "result": false
          },
          {
            "label": "Autres charges d’exploitation",
            "value": 2,
            "sign": "-",
            "result": false
          },
          {
            "label": "Résultat d’exploitation",
            "value": 63,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-noma-bridge"
      },
      {
        "id": "s-noma-bridge-methode-1",
        "title": "Résultat financier : méthode",
        "text": "Différence entre produits financiers et charges financières. Ce solde se calcule indépendamment du résultat d’exploitation.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Comment le financement et les placements contribuent-ils au résultat ?",
        "formula": {
          "label": "Résultat financier",
          "expression": "Produits financiers - charges financières"
        },
        "exercise": "s-noma-bridge",
        "documentReference": "Repérez les produits et charges financiers, puis leur solde. Ce -6 s’ajoute ensuite au résultat d’exploitation."
      },
      {
        "id": "s-noma-bridge-calcul-1",
        "title": "Résultat financier : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Le financement réduit ici le résultat de 6 k€. Le capital d’un emprunt reçu n’est pas un produit financier.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Produits financiers",
            "value": 2,
            "sign": "",
            "result": false
          },
          {
            "label": "Charges financières",
            "value": 8,
            "sign": "-",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": -6,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-noma-bridge"
      },
      {
        "id": "s-noma-bridge-methode-2",
        "title": "RCAI (Résultat courant avant impôts) : méthode",
        "text": "Dans cette grille française : résultat d’exploitation augmenté du résultat financier. Le résultat exceptionnel éventuel est distinct et absent de nos cas.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Que produit l’activité courante après sa composante financière ?",
        "formula": {
          "label": "RCAI",
          "expression": "Résultat d’exploitation + résultat financier"
        },
        "exercise": "s-noma-bridge",
        "documentReference": "Repérez le RCAI sous les deux composantes exploitation et finance."
      },
      {
        "id": "s-noma-bridge-calcul-2",
        "title": "RCAI (Résultat courant avant impôts) : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Le RCAI d’Atelier Repère est 57 k€. Ajouter un résultat financier négatif diminue le résultat. Le RCAI n’est pas un libellé IFRS universel.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Résultat d’exploitation",
            "value": 63,
            "sign": "",
            "result": false
          },
          {
            "label": "Résultat financier",
            "value": -6,
            "sign": "+",
            "result": false
          },
          {
            "label": "RCAI",
            "value": 57,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-noma-bridge"
      },
      {
        "id": "s-noma-bridge-methode-3",
        "title": "Résultat net : méthode",
        "text": "Dans nos cas sans exceptionnel ni participation : RCAI diminué de l’impôt sur les bénéfices. Ne généralisez pas cette chaîne simplifiée à un dossier comportant d’autres éléments.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Que reste-t-il après l’impôt sur les bénéfices dans ce cas ?",
        "formula": {
          "label": "Résultat net (cas simplifié)",
          "expression": "RCAI - impôt sur les bénéfices"
        },
        "exercise": "s-noma-bridge",
        "documentReference": "Repérez l’impôt puis la dernière ligne du tableau. Reconstruisez maintenant la cascade complète de Noma sur brouillon."
      },
      {
        "id": "s-noma-bridge-calcul-3",
        "title": "Résultat net : exemple résolu",
        "text": "Atelier Repère, simulation en k€. Les 40 k€ de résultat net d’Atelier Repère mesurent un bénéfice comptable, pas un solde de banque ou un dividende automatique.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "RCAI",
            "value": 57,
            "sign": "",
            "result": false
          },
          {
            "label": "Impôt sur les bénéfices",
            "value": 17,
            "sign": "-",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": 40,
            "sign": "=",
            "result": true
          }
        ],
        "exercise": "s-noma-bridge"
      },
      {
        "id": "s-noma-bridge-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Noma : exploitation 115, finance -6, RCAI (Résultat courant avant impôts) 109, résultat net 79 k€. Les dotations et les autres charges sont retirées une fois, avant finance et impôt.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "Retirez d’abord dotations et autres charges d’exploitation ; ajoutez le résultat financier, puis retirez l’impôt.",
        "exercise": "s-noma-bridge",
        "writingGuide": null
      },
      {
        "id": "s-vocabulary-notion",
        "title": "Éviter les fausses équivalences",
        "text": "À retenir : SIG (Soldes intermédiaires de gestion) français et présentations internationales se rapprochent par leur sens économique, pas par une égalité automatique des noms. EBE (Excédent brut d’exploitation) n’est ni du cash ni une identité automatique avec EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements). Lisez la définition et les ajustements d’un indicateur avant de comparer. Repères : EBE = Excédent brut d’exploitation ; EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization (résultat avant intérêts, impôts, dépréciations et amortissements) ; RCAI = Résultat courant avant impôts ; IFRS = International Financial Reporting Standards (normes internationales d’information financière).",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "objective": "Construire et interpréter la chaîne des SIG (Soldes intermédiaires de gestion), puis vérifier les limites du rapprochement avec les comptes IFRS (International Financial Reporting Standards - normes internationales d’information financière).",
        "formula": null,
        "formulas": [],
        "exercise": "s-vocabulary"
      },
      {
        "id": "s-vocabulary-exemple",
        "title": "Exemple : Éviter les fausses équivalences",
        "text": "Exemple : ventes de marchandises 160, coût vendu 100 : marge 60. Taux de marge = 60 / 100 × 100 = 60 % ; taux de marque = 60 / 160 × 100 = 37,5 %. Le dénominateur répond à la question économique.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "rows": [
          {
            "label": "Ventes",
            "value": "160 k€",
            "result": false
          },
          {
            "label": "Coût acheté-vendu",
            "value": "100 k€",
            "result": false
          },
          {
            "label": "Marge commerciale",
            "value": "160 - 100 = 60 k€",
            "result": false
          },
          {
            "label": "Taux de marge",
            "value": "60 / 100 × 100 = 60 %",
            "result": false
          },
          {
            "label": "Taux de marque",
            "value": "60 / 160 × 100 = 37,5 %",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "s-vocabulary"
      },
      {
        "id": "s-vocabulary-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "La comparaison exige des périmètres homogènes. EBE (Excédent brut d’exploitation) et EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization - résultat avant intérêts, impôts, dépréciations et amortissements) ne sont pas une identité normative automatique.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma",
        "pitfall": "Lisez les définitions et le rapprochement avec les états financiers.",
        "exercise": "s-vocabulary",
        "writingGuide": null
      },
      {
        "id": "sig-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Le PCG (Plan comptable général) fournit un cadre français. IFRS (International Financial Reporting Standards - normes internationales d’information financière) désigne le référentiel international. Une présentation par nature et une présentation par fonction n’ordonnent pas forcément les mêmes sous-totaux. Ne reconstruisez pas les SIG (Soldes intermédiaires de gestion) de LVMH (Louis Vuitton Moët Hennessy) par simple traduction.",
        "source": "Séance 2, diapositives 22 à 35 ; compléments Noma"
      },
      {
        "id": "sig-source-cas",
        "title": "Un autre cas : construire les premiers SIG",
        "text": "Simulation issue de l’Exercice SIG fourni, en euros. Ventes de marchandises 500 000 ; coût acheté-vendu 300 000. Production vendue 400 000, stockée +20 000, immobilisée 10 000. Matières consommées 140 000 et services externes 110 000.",
        "source": "Exercice SIG, énoncé ; Correction, diapositive 13",
        "rows": [
          {
            "label": "Marge commerciale",
            "value": "500 000 - 300 000 = 200 000 €",
            "result": false
          },
          {
            "label": "Production",
            "value": "400 000 + 20 000 + 10 000 = 430 000 €",
            "result": false
          },
          {
            "label": "Valeur ajoutée",
            "value": "200 000 + 430 000 - 140 000 - 110 000 = 380 000 €",
            "result": true
          }
        ]
      },
      {
        "id": "sig-source-ebe",
        "title": "Du cas complémentaire à l’EBE",
        "text": "Simulation précédente : subventions d’exploitation 15 000 €, taxes d’exploitation 25 000 €, personnel 170 000 €. Les dotations ne sont pas encore retranchées à cet étage.",
        "source": "Correction Exercice SIG, diapositive 13",
        "rows": [
          {
            "label": "Valeur ajoutée",
            "value": "380 000 €",
            "result": false
          },
          {
            "label": "Subventions",
            "value": "+ 15 000 €",
            "result": false
          },
          {
            "label": "Taxes d’exploitation",
            "value": "- 25 000 €",
            "result": false
          },
          {
            "label": "Personnel",
            "value": "- 170 000 €",
            "result": false
          },
          {
            "label": "EBE",
            "value": "380 000 + 15 000 - 25 000 - 170 000 = 200 000 €",
            "result": true
          }
        ]
      },
      {
        "id": "sig-source-net",
        "title": "Terminer le cas complémentaire",
        "text": "Simulation, convention annoncée : la cession est une opération ordinaire ; les 15 000 € de produits et 5 000 € de charges exceptionnels sont supposés liés à un événement majeur et inhabituel. La plus-value de cession 30 000 - 20 000 = 10 000 € est comptée une seule fois, en exploitation.",
        "source": "Correction Exercice SIG, diapositive 14 ; adaptation PCG 2026, ANC",
        "rows": [
          {
            "label": "Exploitation hors cession",
            "value": "200 000 + 4 000 + 8 000 - 2 000 - 40 000 = 170 000 €",
            "result": false
          },
          {
            "label": "Exploitation avec cession ordinaire",
            "value": "170 000 + 10 000 = 180 000 €",
            "result": false
          },
          {
            "label": "Finance",
            "value": "12 000 - 22 000 = -10 000 €",
            "result": false
          },
          {
            "label": "Courant avant impôts",
            "value": "180 000 - 10 000 = 170 000 €",
            "result": false
          },
          {
            "label": "Exceptionnel, hypothèse annoncée",
            "value": "15 000 - 5 000 = 10 000 €",
            "result": false
          },
          {
            "label": "Résultat net",
            "value": "170 000 + 10 000 - 6 000 - 34 000 = 140 000 €",
            "result": true
          }
        ]
      }
    ],
    "real-case": [
      {
        "id": "real-case-mission",
        "title": "Cas réel - LVMH 2025 : votre objectif",
        "text": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "retain": "Un chiffre n’est utile qu’avec sa source, son unité et son périmètre. La décision exige davantage qu’un calcul : elle exige une hypothèse testable."
      },
      {
        "id": "real-case-mot-1",
        "title": "IFRS",
        "text": "Normes internationales d’information financière. Les intitulés d’un groupe ne sont pas automatiquement les SIG français.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      },
      {
        "id": "real-case-mot-2",
        "title": "Part du groupe",
        "text": "Fraction du bénéfice consolidé attribuable aux propriétaires de la société mère, après les intérêts minoritaires.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      },
      {
        "id": "real-case-mot-3",
        "title": "Intérêts minoritaires",
        "text": "Part du résultat des filiales revenant aux autres propriétaires. Ce n’est pas une charge financière.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      },
      {
        "id": "real-case-repere-0",
        "title": "Situer le raisonnement",
        "text": "Document officiel consolidé LVMH (Louis Vuitton Moët Hennessy) 2025, en M€ : lisez titre, exercice, unité et périmètre avant les lignes. Les charges sont signées négativement. Le sous-total avant impôt est reconstruit à des fins pédagogiques.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      },
      {
        "id": "real-case-repere-1",
        "title": "Situer le raisonnement",
        "text": "Travaillez sur le tableau bilingue et l’extrait authentique : repérez les lignes, retrouvez les niveaux, qualifiez votre taux, puis rédigez. La note et la validation finale testent le raisonnement, pas une récitation.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      },
      {
        "id": "lvmh-document",
        "title": "Observer le document publié",
        "text": "LVMH, compte consolidé 2025, en millions d’euros. L’extrait d’origine présente aussi 2024. Les activités reprennent les valeurs 2025 dans un tableau accessible.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "image": true
      },
      {
        "id": "l-locate-notion",
        "title": "Lire un document authentique",
        "text": "Méthode du document : lisez d’abord le titre, le périmètre consolidé, l’unité, les années et les sous-totaux. Repérez six lignes dans l’extrait : ventes, coût des ventes, marge brute, résultat opérationnel, impôts et résultat part du groupe. Les libellés originaux sont conservés dans le tableau bilingue.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": null,
        "formulas": [],
        "exercise": "l-locate"
      },
      {
        "id": "l-locate-exemple",
        "title": "Exemple : Lire un document authentique",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-locate"
      },
      {
        "id": "l-locate-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "La source est le compte consolidé 2025, en M€. Les deux niveaux opérationnels et les deux niveaux de résultat net ont des périmètres différents. Le tableau bilingue aide à lire les intitulés ; il ne transforme pas Gross margin (marge brute) en marge commerciale française.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "Le tableau est consolidé, en millions d’euros. Utilisez 2025.",
        "exercise": "l-locate",
        "writingGuide": null
      },
      {
        "id": "l-reconstruct-notion",
        "title": "Reconstituer le niveau opérationnel courant",
        "text": "Reconstruction : expliquez chaque signe et vérifiez le sous-total contre le document. Le revenu des coentreprises et associés est ajouté ici conformément à la présentation publiée. Ne le réaffectez pas arbitrairement à une autre ligne. Comparez la question économique de la marge brute et celle du résultat opérationnel courant.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": "Rappel : ventes + coût des ventes signé = marge brute ; marge brute + frais commerciaux signés + frais administratifs signés + résultat des coentreprises = résultat opérationnel courant dans ce document.",
        "formulas": [],
        "exercise": "l-reconstruct"
      },
      {
        "id": "l-reconstruct-exemple",
        "title": "Exemple : Reconstituer le niveau opérationnel courant",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-reconstruct"
      },
      {
        "id": "l-reconstruct-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "80 807 - 27 279 = 53 528 M€ ; 53 528 - 29 914 - 5 934 + 75 = 17 755 M€. Le premier solde précède les autres charges opérationnelles ; le second suit leur périmètre publié.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "Respectez les signes : les associés apportent ici +75.",
        "exercise": "l-reconstruct",
        "writingGuide": null
      },
      {
        "id": "l-pretax-notion",
        "title": "Du courant au résultat avant impôt",
        "text": "Distinguez deux opérations de lecture : passer du résultat opérationnel courant au résultat opérationnel publié, puis intégrer le résultat financier net. La ligne avant impôt est un sous-total reconstruit pour cet exercice ; elle n’est pas rebaptisée EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) ou RCAI (Résultat courant avant impôts) par ressemblance. Repères utiles : EBIT (Earnings Before Interest and Taxes - résultat avant intérêts et impôts) ; RCAI (Résultat courant avant impôts).",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": "Rappel : opérationnel courant + autres éléments opérationnels signés = opérationnel ; opérationnel + résultat financier net signé = avant impôt reconstruit.",
        "formulas": [],
        "exercise": "l-pretax"
      },
      {
        "id": "l-pretax-exemple",
        "title": "Exemple : Du courant au résultat avant impôt",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-pretax"
      },
      {
        "id": "l-pretax-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Le résultat opérationnel est 17 099 M€. Le résultat avant impôt reconstruit est 16 698 M€ ; il n’est pas une ligne explicite du tableau original mais un calcul pédagogique identifié.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "17 755 - 656 = 17 099 ; puis retirez 401.",
        "exercise": "l-pretax",
        "writingGuide": null
      },
      {
        "id": "l-group-notion",
        "title": "Identifier le bénéfice attribuable",
        "text": "à qui le bénéfice consolidé est-il attribuable ? La part des autres détenteurs des filiales doit être distinguée de celle attribuable au Groupe. Il s’agit d’une attribution du résultat consolidé, pas d’une nouvelle charge opérationnelle ni d’un dividende distribué.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": "Rappel : avant impôt + impôts signés = net consolidé ; net consolidé - part des autres détenteurs = résultat net part du Groupe.",
        "formulas": [],
        "exercise": "l-group"
      },
      {
        "id": "l-group-exemple",
        "title": "Exemple : Identifier le bénéfice attribuable",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-group"
      },
      {
        "id": "l-group-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "16 698 - 5 476 = 11 222 M€ avant minoritaires ; 11 222 - 344 = 10 878 M€ attribuables au Groupe. La part du Groupe n’est pas un dividende et le bénéfice n’est pas le cash.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "16 698 - 5 476 = 11 222, puis retirez 344.",
        "exercise": "l-group",
        "writingGuide": null
      },
      {
        "id": "l-compare-notion",
        "title": "Qualifier le taux calculé",
        "text": "Interpréter : nommez le numérateur et le dénominateur avant le pourcentage. Reliez ensuite ce taux aux frais commerciaux, aux coûts et au périmètre observé. Une explication plausible demande des informations complémentaires ; un ratio n’est pas une causalité. Repères utiles : SIG (Soldes intermédiaires de gestion).",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": "Rappel : marge du niveau demandé = résultat de ce niveau / chiffre d’affaires × 100. Chaque taux dépend du numérateur choisi.",
        "formulas": [
          {
            "label": "Marge opérationnelle courante",
            "numerator": "Résultat opérationnel courant",
            "denominator": "Chiffre d’affaires",
            "multiplier": "× 100"
          }
        ],
        "exercise": "l-compare"
      },
      {
        "id": "l-compare-exemple",
        "title": "Exemple : Qualifier le taux calculé",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-compare"
      },
      {
        "id": "l-compare-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "17 755 / 80 807 × 100 = environ 22,0 %. C’est la marge opérationnelle courante, pas un taux de marge commerciale SIG (Soldes intermédiaires de gestion) ni une marge nette. Le seul taux ne permet pas de déclarer le Groupe bon ou mauvais.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "Utilisez le courant 17 755, pas le résultat net part du groupe.",
        "exercise": "l-compare",
        "writingGuide": null
      },
      {
        "id": "l-note-notion",
        "title": "Mission analyste : rédiger une analyse prudente",
        "text": "Auto-évaluation structurée : le moteur vérifie la présence d’un texte et des critères déclarés, pas sa qualité sémantique : il ne corrige pas automatiquement le sens. Votre texte reste sur cet appareil. Vous pouvez exporter votre bilan pour le transmettre vous-même. Utilisez uniquement les données du cas.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": null,
        "formulas": [],
        "exercise": "l-note"
      },
      {
        "id": "l-note-exemple",
        "title": "Exemple : Mission analyste : rédiger une analyse prudente",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-note"
      },
      {
        "id": "l-note-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Une note responsable sépare performance observée et explication. Le modèle ne remplace pas une enquête sur les causes.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "Citez deux comparaisons, une cause possible et une donnée discriminante.",
        "exercise": "l-note",
        "writingGuide": {
          "purpose": "Une note courte aide votre manager à distinguer un constat, une explication possible et une décision encore conditionnelle. Votre rôle : analyste junior.",
          "context": "Vous préparez un point d’activité ; votre manager vous demande ce que les chiffres permettent réellement de dire.",
          "structure": "1. Observation chiffrée avec période, unité et périmètre. 2. Hypothèse au conditionnel. 3. Information précise à vérifier. 4. Recommandation prudente, seulement si les vérifications la soutiennent.",
          "good": "Exemple distinct : sur notre cas simplifié, les ventes passent de 100 à 120 et l’exploitation de 20 à 18. La marge opérationnelle recule de 20 % à 15 %. Un coût unitaire plus élevé pourrait contribuer ; vérifier les achats et le mix. Préparer une revue des coûts avant de proposer une action, sans conclure encore sur la trésorerie.",
          "bad": "Les ventes augmentent, donc tout va bien : investissons immédiatement.",
          "difference": "Le bon exemple chiffre et qualifie le fait, sépare l’hypothèse de la preuve et conditionne l’action. Le contre-exemple transforme un seul montant en certitude puis en décision sans vérification.",
          "criteria": "Vérifiez la cohérence des chiffres, le nom de l’indicateur, la séparation observation/hypothèse, l’information demandée et la prudence. Les cases ci-dessous sont votre auto-évaluation, pas une validation du sens par une intelligence artificielle."
        }
      },
      {
        "id": "l-boundaries-notion",
        "title": "Quatre objets à ne pas confondre",
        "text": "Frontière de la mission : résultat net, CAF (Capacité d’autofinancement), flux de trésorerie et trésorerie sont différents. La CAF (Capacité d’autofinancement) est une passerelle française de ressources internes potentielles ; elle n’est pas une ligne obligatoire du tableau de flux IFRS (International Financial Reporting Standards - normes internationales d’information financière). Aucun calcul de flux n’est nécessaire ici.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": null,
        "formulas": [],
        "exercise": "l-boundaries"
      },
      {
        "id": "l-boundaries-exemple",
        "title": "Exemple : Quatre objets à ne pas confondre",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-boundaries"
      },
      {
        "id": "l-boundaries-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Résultat net, CAF (Capacité d’autofinancement), flux et trésorerie répondent à quatre questions. La passerelle française ne remplace pas le tableau des flux et aucune formule de capacité d’autofinancement n’est enseignée ici.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "La trésorerie est un stock ; un flux est un mouvement ; une capacité potentielle ne prouve pas un encaissement.",
        "exercise": "l-boundaries",
        "writingGuide": null
      },
      {
        "id": "l-final-notion",
        "title": "Validation finale : reconstruire et décider",
        "text": "Cette validation combine les distinctions économiques, une chaîne de calcul dans un dossier différent et la prudence d’analyse. La note LVMH (Louis Vuitton Moët Hennessy) précédente complète le questionnaire : une réponse cochée ne remplace pas une justification. Aucun chronomètre n’impose le rythme. Repères utiles : SIG (Soldes intermédiaires de gestion).",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "objective": "Lire le document authentique, reconstruire certains niveaux et produire une analyse prudente.",
        "formula": null,
        "formulas": [],
        "exercise": "l-final"
      },
      {
        "id": "l-final-exemple",
        "title": "Exemple : Validation finale : reconstruire et décider",
        "text": "Exemple distinct, en M€ : ventes 1 000 - coût vendu 400 = marge brute 600 ; moins frais commerciaux 300 et administratifs 100, plus associés 5 = courant 205 ; autres éléments -10 = opérationnel 195 ; finance -15 = avant impôt 180 ; impôt 50 = net 130 ; minoritaires 10 = part du Groupe 120. Marge courante = 205 / 1 000 × 100 = 20,5 %. Ces intitulés ne créent pas une équivalence avec les SIG.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "rows": [
          {
            "label": "Ventes - coût vendu",
            "value": "1 000 - 400 = 600 M€",
            "result": false
          },
          {
            "label": "Courant opérationnel",
            "value": "600 - 300 - 100 + 5 = 205 M€",
            "result": false
          },
          {
            "label": "Autres éléments opérationnels",
            "value": "- 10 M€",
            "result": false
          },
          {
            "label": "Résultat opérationnel",
            "value": "205 - 10 = 195 M€",
            "result": false
          },
          {
            "label": "Finance",
            "value": "- 15 M€",
            "result": false
          },
          {
            "label": "Résultat avant impôt",
            "value": "195 - 15 = 180 M€",
            "result": false
          },
          {
            "label": "Impôt",
            "value": "- 50 M€",
            "result": false
          },
          {
            "label": "Bénéfice total",
            "value": "180 - 50 = 130 M€",
            "result": true
          }
        ],
        "formulas": [],
        "exercise": "l-final"
      },
      {
        "id": "l-final-retenir",
        "title": "À retenir avant de pratiquer",
        "text": "Validation franchie. Votre raisonnement doit rester traçable : période et périmètre, sous-totaux distincts, taux nommé, hypothèse conditionnelle, information à vérifier. Un bénéfice n’est ni un dividende ni un solde bancaire.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025",
        "pitfall": "Reprenez la chaîne économique, les frontières avec le cash et la méthode observation/hypothèse/vérification.",
        "exercise": "l-final",
        "writingGuide": null
      },
      {
        "id": "real-case-approfondir",
        "title": "Pour approfondir et reconnaître les limites",
        "text": "Approfondir : le document comporte aussi bilan, flux de trésorerie et notes. Pour tester une hypothèse sur le change, les stocks ou le cash, ces autres états deviennent indispensables.",
        "source": "Séance 2, diapositives 36 à 40 ; LVMH, Financial Documents 2025"
      }
    ]
  }
};
