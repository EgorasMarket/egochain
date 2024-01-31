import React, { useState, useEffect, useRef } from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import "./whitepaper.css";
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);
const WhitePaper = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const contentDiv = document.getElementById("content");

    const updateActiveSection = () => {
      const scrollPosition = contentDiv.scrollTop;
      const sections = document.querySelectorAll(
        ".whitePaper_div_area_body_area_section"
      );

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffsetTop = section.offsetTop - 50;

        if (scrollPosition >= sectionOffsetTop) {
          setActiveSection(sectionId);
        }
      });
    };

    contentDiv.addEventListener("scroll", updateActiveSection);

    return () => {
      contentDiv.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <div className="whitepaper_div">
      <div className="container">
        <div className="whitePaper_div_area_body">
          <div className="whitePaper_div_area_body_side" id="sidebar">
            <div
              className={
                activeSection === "abstract"
                  ? "active"
                  : " whitePaper_div_area_body_side_list"
              }
            >
              <a href="#abstract">Abstract</a>
            </div>
            <div
              className={
                activeSection === "introduction"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#introduction">Introduction</a>
            </div>
            <div
              className={
                activeSection === "Production of affordable EVs"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Production of affordable EVs">
                Production of affordable EVs
              </a>
            </div>
            <div
              className={
                activeSection ===
                "Streamlining Manufacturing and Boosting Accessibility"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Streamlining Manufacturing and Boosting Accessibility">
                Streamlining Manufacturing and Boosting Accessibility
              </a>
            </div>
            <div
              className={
                activeSection === "Benefits Beyond Cost Savings"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#in-mcd-we-trust">Benefits Beyond Cost Savings</a>
            </div>
            <div
              className={
                activeSection ===
                "Charging costs & Improved charging infrastructure"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Charging costs & Improved charging infrastructure">
                Charging costs & Improved charging infrastructure
              </a>
            </div>
            <div
              className={
                activeSection === "Transparency, Efficiency, and Incentives"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Transparency, Efficiency, and Incentives">
                Transparency, Efficiency, and Incentives
              </a>
            </div>
            <div
              className={
                activeSection ===
                "Earning Rewards in the Egochain Ecosystem: Pathways to Participation"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Earning Rewards in the Egochain Ecosystem: Pathways to Participation">
                Earning Rewards in the Egochain Ecosystem: Pathways to
                Participation
              </a>
            </div>
            <div
              className={
                activeSection === "Fueling Growth Through Rewards"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Fueling Growth Through Rewards">
                Fueling Growth Through Rewards
              </a>
            </div>
            <div
              className={
                activeSection === "Earning with Vesting and Liquid Ownership"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Earning with Vesting and Liquid Ownership">
                Earning with Vesting and Liquid Ownership
              </a>
            </div>
            <div
              className={
                activeSection === "The Egochain Coin (EGAX)"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#The Egochain Coin (EGAX)">The Egochain Coin (EGAX)</a>
            </div>
            <div
              className={
                activeSection === "The EGC Coin (EGC)"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#The EGC Coin (EGC)">The EGC Coin (EGC)</a>
            </div>
            <div
              className={
                activeSection === "Smart Electric Vehicles"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Smart Electric Vehicles">Smart Electric Vehicles</a>
            </div>
            <div
              className={
                activeSection === "Tokenization"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Tokenization">Tokenization</a>
            </div>
            <div
              className={
                activeSection === "Unlocking Value Through Collateralization"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Unlocking Value Through Collateralization">
                Unlocking Value Through Collateralization
              </a>
            </div>
            <div
              className={
                activeSection === "Enhancing Transparency, Empowering Lending"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Enhancing Transparency, Empowering Lending">
                Enhancing Transparency, Empowering Lending
              </a>
            </div>
            <div
              className={
                activeSection === "Beyond Redefining Ownership"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Beyond Redefining Ownership">
                Beyond Redefining Ownership
              </a>
            </div>
            <div
              className={
                activeSection === "Distributing Egax Coin"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Distributing Egax Coin">Distributing Egax Coin</a>
            </div>
            <div
              className={
                activeSection === "Electric Vehicle Smart Charging System"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Electric Vehicle Smart Charging System">
                Electric Vehicle Smart Charging System
              </a>
            </div>
            <div
              className={
                activeSection === "Smart Charging Architecture"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Smart Charging Architecture">
                Smart Charging Architecture
              </a>
            </div>
            <div
              className={
                activeSection === "Charging Algorithm and Flexibility Offers"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Charging Algorithm and Flexibility Offers">
                Charging Algorithm and Flexibility Offers
              </a>
            </div>
            <div
              className={
                activeSection ===
                "Determining Electric Vehicle (EV) Flexibility for Next Time Step"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Determining Electric Vehicle (EV) Flexibility for Next Time Step">
                Determining Electric Vehicle (EV) Flexibility for Next Time Step
              </a>
            </div>
            <div
              className={
                activeSection === "Decentralized Secure Charging with Egochain"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Decentralized Secure Charging with Egochain">
                Decentralized Secure Charging with Egochain
              </a>
            </div>
            <div
              className={
                activeSection === "Simulation Parameters"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Simulation Parameters">Simulation Parameters</a>
            </div>
            <div
              className={
                activeSection ===
                "Dynamic Charging Model Based on User Activity"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Dynamic Charging Model Based on User Activity">
                Dynamic Charging Model Based on User Activity
              </a>
            </div>
            <div
              className={
                activeSection === "Simulation Scenarios and Methodology"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Simulation Scenarios and Methodology">
                Simulation Scenarios and Methodology
              </a>
            </div>
            <div
              className={
                activeSection === "Results and Discussion"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Results and Discussion">Results and Discussion</a>
            </div>
            <div
              className={
                activeSection === "Conclusion"
                  ? "active"
                  : "whitePaper_div_area_body_side_list"
              }
            >
              <a href="#Conclusion">Conclusion</a>
            </div>
          </div>
          <div className="mobile_header">
            {/* <div className="container"> */}
            <div className="mobile_header_area">
              <Accordion>
                <AccordionItem header="Menu ">
                  <div className="mobile_header_links_area">
                    <div
                      className={
                        activeSection === "abstract"
                          ? "active"
                          : " whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#abstract">Abstract</a>
                    </div>
                    <div
                      className={
                        activeSection === "introduction"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#introduction">Introduction</a>
                    </div>
                    <div
                      className={
                        activeSection === "Production of affordable EVs"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Production of affordable EVs">
                        Production of affordable EVs
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Streamlining Manufacturing and Boosting Accessibility"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Streamlining Manufacturing and Boosting Accessibility">
                        Streamlining Manufacturing and Boosting Accessibility
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Benefits Beyond Cost Savings"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#in-mcd-we-trust">
                        Benefits Beyond Cost Savings
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Charging costs & Improved charging infrastructure"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Charging costs & Improved charging infrastructure">
                        Charging costs & Improved charging infrastructure
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Transparency, Efficiency, and Incentives"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Transparency, Efficiency, and Incentives">
                        Transparency, Efficiency, and Incentives
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Earning Rewards in the Egochain Ecosystem: Pathways to Participation"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Earning Rewards in the Egochain Ecosystem: Pathways to Participation">
                        Earning Rewards in the Egochain Ecosystem: Pathways to
                        Participation
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Fueling Growth Through Rewards"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Fueling Growth Through Rewards">
                        Fueling Growth Through Rewards
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Earning with Vesting and Liquid Ownership"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Earning with Vesting and Liquid Ownership">
                        Earning with Vesting and Liquid Ownership
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "The Egochain Coin (EGAX)"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#The Egochain Coin (EGAX)">
                        The Egochain Coin (EGAX)
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "The EGC Coin (EGC)"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#The EGC Coin (EGC)">The EGC Coin (EGC)</a>
                    </div>
                    <div
                      className={
                        activeSection === "Smart Electric Vehicles"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Smart Electric Vehicles">
                        Smart Electric Vehicles
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Tokenization"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Tokenization">Tokenization</a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Unlocking Value Through Collateralization"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Unlocking Value Through Collateralization">
                        Unlocking Value Through Collateralization
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Enhancing Transparency, Empowering Lending"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Enhancing Transparency, Empowering Lending">
                        Enhancing Transparency, Empowering Lending
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Beyond Redefining Ownership"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Beyond Redefining Ownership">
                        Beyond Redefining Ownership
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Distributing Egax Coin"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Distributing Egax Coin">
                        Distributing Egax Coin
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Electric Vehicle Smart Charging System"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Electric Vehicle Smart Charging System">
                        Electric Vehicle Smart Charging System
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Smart Charging Architecture"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Smart Charging Architecture">
                        Smart Charging Architecture
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Charging Algorithm and Flexibility Offers"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Charging Algorithm and Flexibility Offers">
                        Charging Algorithm and Flexibility Offers
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Determining Electric Vehicle (EV) Flexibility for Next Time Step"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Determining Electric Vehicle (EV) Flexibility for Next Time Step">
                        Determining Electric Vehicle (EV) Flexibility for Next
                        Time Step
                      </a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Decentralized Secure Charging with Egochain"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Decentralized Secure Charging with Egochain">
                        Decentralized Secure Charging with Egochain
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Simulation Parameters"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Simulation Parameters">Simulation Parameters</a>
                    </div>
                    <div
                      className={
                        activeSection ===
                        "Dynamic Charging Model Based on User Activity"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Dynamic Charging Model Based on User Activity">
                        Dynamic Charging Model Based on User Activity
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Simulation Scenarios and Methodology"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Simulation Scenarios and Methodology">
                        Simulation Scenarios and Methodology
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Results and Discussion"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Results and Discussion">
                        Results and Discussion
                      </a>
                    </div>
                    <div
                      className={
                        activeSection === "Conclusion"
                          ? "active"
                          : "whitePaper_div_area_body_side_list"
                      }
                    >
                      <a href="#Conclusion">Conclusion</a>
                    </div>
                  </div>{" "}
                </AccordionItem>
              </Accordion>
            </div>
            {/* </div> */}
          </div>

          {/* ---------==--=-=-- */}
          {/* ---------==--=-=-- */}
          {/* ---------==--=-=-- */}
          {/* ---------==--=-=-- */}
          {/* ---------==--=-=-- */}
          <div
            className="whitePaper_div_area_body_area"
            id="content"
            // ref={contentRef}
          >
            <div className="whitePaper_div_area_title">
              Egochain: Incentivized Operating System for Electric Vehicles
              Powered by Blockchain Technology.
            </div>
            {/* =========== */}
            {/* =========== */}
            <section
              id="abstract"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Abstract
              </div>{" "}
              Electric vehicles (EVs) offer a promising path towards sustainable
              transportation, widespread adoption remains hindered by high price
              points, underdeveloped charging infrastructure, and prohibitive
              charging costs. This whitepaper proposes Egochain, a
              blockchain-based solution designed to ignite a global EV
              revolution by overcoming these key barriers.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="introduction"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Introduction
              </div>{" "}
              The undeniable force of transportation in our daily lives
              confronts us with a stark reality: change, however necessary,
              often faces an uphill battle against established social norms.
              Despite growing awareness of Electric Vehicles (EVs), only a
              fraction of the global population (less than 30%) has firsthand
              experience with this burgeoning technology. Yet, EVs are poised to
              redefine our relationship with transportation, with their global
              market share projected to leap from 16% in 2022 to 20% by 2023
              (considering only battery electric and plug-in hybrid EVs).
              <br />
              <br />
              While EV adoption is accelerating, cost remains a crucial
              obstacle. Soaring gasoline prices provide a compelling incentive,
              but high vehicle costs, underdeveloped charging infrastructure,
              and prohibitively expensive charging fees act as roadblocks to
              widespread adoption.
              <br />
              <br />
              This is where Egochain steps in, armed with the transformative
              power of blockchain technology.
              <br />
              <br />
              Egochain envisions a future where EVs are not just a novelty, but
              a readily accessible and affordable transportation option for all.
              Our blockchain platform unlocks these possibilities through:
              <br />
              <span>
                <li>
                  Production of affordable EVs: By enhancing transparency and
                  efficiency, Egochain can optimize EV manufacturing processes,
                  driving down costs and fostering wider production of
                  affordable electric vehicles.
                </li>
                <li>
                  Reduced charging costs: The secure and decentralized nature of
                  the blockchain enables more efficient development and
                  management of charging stations, resulting in lower charging
                  fees for drivers.
                </li>
                <li>
                  Profitable charging infrastructure: Egochain offers attractive
                  rewards and simplifies operations for those wishing to invest
                  in charging stations, rapidly expanding access to vital
                  charging points.
                </li>
              </span>
              <br />
              <br />
              Egochain goes beyond merely acknowledging the barriers to EV
              adoption. It provides a comprehensive solution, leveraging the
              power of blockchain to break down these hurdles and pave the way
              for a more sustainable and accessible transportation future.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Production of affordable EVs"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Production of affordable EVs
              </div>{" "}
              The electric vehicle (EV) industry faces a significant hurdle:
              cost. EVs generally carry a higher price tag than their
              gasoline-powered counterparts, primarily due to battery
              technology. These batteries require costly raw materials and
              substantial capacity to meet range expectations, driving up
              overall costs. Even excluding battery expenses, the sheer
              abundance of existing gas-powered vehicles pushes their prices
              down further, widening the affordability gap. While EVs often
              boast lower operating costs in the long run, the initial purchase
              barrier remains a formidable obstacle, particularly for
              budget-conscious consumers in developing economies.
              <br />
              <br />
              Chart
              <img src="/img/ev_purchase_chart_reason.svg" alt="" />{" "}
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Streamlining Manufacturing and Boosting Accessibility"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Streamlining Manufacturing and Boosting Accessibility
              </div>{" "}
              Egochain's transparent and efficient blockchain technology offers
              a solution to streamline EV manufacturing, ultimately making them
              more accessible.
              <br />
              <br />
              Here is how:
              <span>
                <li>
                  <b> Cost Reduction Through Transparent Supply Chains:</b>{" "}
                  Egochain's track-and- trace capabilities enable manufacturers
                  to eliminate counterfeit parts and diversion within their
                  supply chains. This not only safeguards quality but also
                  minimizes waste and cost overruns associated with managing
                  fraudulent components.
                </li>
                <li>
                  <b> Enhanced Profitability with Efficient Recalls:</b>{" "}
                  Traditional recalls often involve entire model years due to
                  uncertainties regarding the origin of problematic parts.
                  Egochain's precise tracking allows targeted recalls, focusing
                  only on vehicles equipped with components from the affected
                  supplier. This significantly reduces the recall's scope and
                  associated expenses.
                </li>
              </span>
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Benefits Beyond Cost Savings"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Benefits Beyond Cost Savings
              </div>{" "}
              The benefits of Egochain extend beyond mere cost reduction:
              <br />
              <span>
                <li>
                  <b> Increased Consumer Confidence:</b> Enhanced transparency
                  fosters trust by assuring consumers of the provenance and
                  quality of their EVs.
                </li>
                <li>
                  <b> Sustainability Advancement: </b> Eliminating waste and
                  optimizing resource use within the supply chain contributes to
                  a more sustainable automotive industry.
                </li>
              </span>
              <br />
              <br />
              Egochain's blockchain technology positions itself as a key
              facilitator in overcoming the cost barrier hindering wider EV
              adoption, opening doors for a greener future.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Charging costs & Improved charging infrastructure"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Charging costs & Improved charging infrastructure
              </div>{" "}
              Despite the surging popularity of electric vehicles (EVs) in
              countries like Norway, Sweden, and the UK, a lack of readily
              available public charging stations remains a major obstacle to
              wider adoption. Euromonitor International's 2023 Voice of the
              Consumer: Mobility Survey identified poor charging infrastructure
              as the second most common reason for hesitation towards EVs,
              fueling "range anxiety" – the fear of running out of power before
              finding a charger.
              <br />
              <br />
              The European Union's 2014 Alternative Fuel Infrastructure
              Directive (AFID) recommends a ratio of 10 EVs per charging station
              for member states. However, significant gaps persist. In 2022,
              countries like Norway (31 EVs per charger), Germany (23), the UK
              (19), and Denmark (18) fell short of this target.
              <br />
              <br />
              Chart2
              <img src="/img/whitepaper_img2.svg" alt="" /> <br />
              <br />
              Expanding public charging networks is crucial, particularly for
              urban dwellers living in apartments, where home charging is often
              infeasible. However, challenges exist. Public EV charging stations
              can be expensive to install, with Level 2 and DC fast chargers
              costing between $2,500 and $36,000, excluding installation and
              permits.
              <br />
              <br />
              Adding to the complexity, unlike the consistent gallon-based
              pricing of gasoline, EV charging employs various structures,
              sometimes leading to confusing and potentially inflated costs.
              This inconsistency can disincentivize EV adoption due to consumer
              frustration and negative experiences.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Transparency, Efficiency, and Incentives"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Transparency, Efficiency, and Incentives
              </div>{" "}
              Egochain's blockchain technology offers a solution by enabling an
              open-source network of charging stations. The decentralized nature
              allows ownership by anyone, including local businesses like
              grocery stores. Transactions are securely recorded on the
              blockchain, reducing fraud and improving operational efficiency.
              <br />
              <br />
              Beyond convenience, Egochain incentivizes green transportation by
              rewarding EV owners with tokens for using less popular stations.
              This balances grid load and promotes energy efficiency,
              contributing to a cleaner transportation ecosystem.
              <br />
              <br />
              Tackling range anxiety through wider public EV charging
              infrastructure access is crucial for a successful transition to
              sustainable mobility. Egochain's blockchain- based approach
              delivers transparency, efficiency, and incentives, offering a
              promising path towards overcoming current obstacles and
              accelerating EV adoption.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Earning Rewards in the Egochain Ecosystem: Pathways to Participation"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Earning Rewards in the Egochain Ecosystem: Pathways to
                Participation
              </div>{" "}
              This section explores the fundamental concepts powering Egochain
              and the rewarding landscape for those who actively contribute to
              its success, ultimately accelerating the adoption of electric
              vehicles.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Fueling Growth Through Rewards"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Fueling Growth Through Rewards
              </div>{" "}
              Egochain welcomes contributions through two primary channels: debt
              and ownership. Both play crucial roles in propelling the expansion
              of electric vehicle adoption and boosting the value of its native
              currency. Within the ownership category, two distinct options
              exist: liquid and vesting. Vesting ownership implies a long-term
              commitment, locking tokens for a predetermined period, while
              liquid ownership grants immediate transferability.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Earning with Vesting and Liquid Ownership"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Earning with Vesting and Liquid Ownership
              </div>{" "}
              <b>Vesting Ownership:</b> Earn rewards continuously over time
              while demonstrating a long-term dedication to Egochain's mission.
              Tokens become gradually accessible, fostering deeper alignment
              between contributor interests and the ecosystem's long- term
              vision.
              <br />
              <br />
              <b>Liquid Ownership:</b> Earn rewards continuously over time while
              demonstrating a long-term dedication to Egochain's mission. Tokens
              become gradually accessible, fostering deeper alignment between
              contributor interests and the ecosystem's long- term vision.
              <br />
              <br />
              By recognizing the diverse motivations of potential contributors,
              Egochain empowers individuals to choose the reward-earning path
              that best aligns with their goals and risk tolerance. This
              inclusive approach paves the way for a robust and diverse
              participation landscape, propelling the ecosystem towards its
              ambitious goals of widespread electric vehicle adoption.
            </section>
            <div className="break_line_txt">
              The Egochain blockchain interacts with two kinds of coins
            </div>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="The Egochain Coin (EGAX)"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                The Egochain Coin (EGAX)
              </div>{" "}
              <br />
              <b>EGAX</b> is the native token of Egochain, a blockchain platform
              specifically designed for the electric vehicle (EV) ecosystem. It
              serves as the lifeblood of this innovative network, powering
              transactions, incentivizing participation, and unlocking a new era
              of mobility.
              <br />
              <br />
              <b>Fueling Adoption and Infrastructure</b>
              <br />
              <br />
              <span>
                ➔ 80% of EGAX distribution rewards directly contribute to the
                heart of the EV ecosystem:
                <br />◆ <b>EV drivers:</b> Incentivized through rebates, loyalty
                programs, and pay- per-use charging, encouraging widespread EV
                adoption.
                <br /> ◆ <b> Charging station operators:</b>
                Earning rewards for providing essential infrastructure and
                promoting a sustainable future.
                <br />➔ This targeted distribution fosters a symbiotic
                relationship, fueling both demand and supply within the EV
                market.
              </span>
              <br />
              <br />
              <b>Secure and Staking-Free Rewards</b>
              <br />
              <br />
              <span>
                <li>
                  19% of EGAX is allocated to validators who secure the Egochain
                  network through robust consensus mechanisms. This ensures the
                  platform's stability and transparency, building trust and
                  attracting further investment.
                </li>
                <li>
                  Uniquely, Egochain eliminates the complexities of staking by
                  offering automatic claiming of earned EGAX for all users. This
                  user-friendly approach maximizes accessibility and
                  participation, making EGAX truly inclusive.
                </li>
                <li>
                  1%: EGC holders, providing passive income for supporting the
                  ecosystem.
                </li>
              </span>
              <br />
              <br />
              <b>Frictionless Payments and Seamless Integration</b>
              <br />
              <br />
              <span>
                <li>
                  <b>Microtransactions:</b> EGAX boasts a minimal unit value,
                  enabling smooth and efficient payments for even the smallest
                  purchases, like individual charging sessions. This seamless
                  experience encourages frequent engagement and fosters broader
                  adoption.
                </li>
                <li>
                  <b>Built-in claiming: </b> Imagine claiming your earned EGAX
                  directly through your EV! With APEX EVs, this futuristic
                  vision becomes reality. Claiming rewards becomes an effortless
                  part of your driving experience, further reinforcing the
                  integration of EGAX into the everyday lives of EV users.
                </li>
              </span>
              <br />
              EGAX represents more than just a coin; it's the key to unlocking a
              future where electric mobility thrives. Its unique design
              incentivizes participation, simplifies interaction, and fuels
              continuous growth within the EV ecosystem.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="The EGC Coin (EGC)"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                The EGC Coin (EGC)
              </div>{" "}
              <br />
              Start-ups thrive on patient capital commitment. Investors
              recognize the years-long journey before reaping returns from their
              stakes. Short-term exits pose a significant challenge. New capital
              raised to fuel growth competes with existing shareholders seeking
              to cash out. Savvy investors prioritize capital contributions that
              propel company expansion, not appease those aiming for a quick
              escape.
              <br />
              <br />
              Long-term commitment unlocks immense value. It empowers
              communities to chart future-focused plans. Stakeholder dedication
              aligns voting and decision-making with sustainable growth, rather
              than fleeting spikes. Conversely, the cryptocurrency landscape
              often witnesses speculators flitting between digital assets based
              on anticipated short-term gains.
              <br />
              <br />
              Egochain envisions a community deeply invested in its long-term
              vision. Its unique model empowers users to commit their EGC COIN
              to lockup periods – one month, six months, or even a year –
              garnering platform benefits in return. Staked EGC balances remain
              non-transferable and non-divisible, effectively taking them off
              the open market. This deliberate design discourages short-term
              trading and fosters commitment. Stakers reap daily rewards, with
              EGC holders receiving 15% of the annual returns directly
              proportional to their locked stakes.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Smart Electric Vehicles"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Smart Electric Vehicles
              </div>{" "}
              <br />
              The seeds of smart vehicles were sown in the fertile ground of
              early Bitcoin projects. In 2013, Colored Coins emerged as a
              pioneering concept, offering a way to represent assets on the
              Bitcoin blockchain. This groundbreaking initiative laid the
              groundwork for the evolution of "smart property" within the
              nascent blockchain ecosystem.
              <br />
              <br />
              The year 2014 witnessed another pivotal moment with the advent of
              Counterparty. This platform empowered users to create their own
              tokens within the Bitcoin blockchain, representing a diverse range
              of assets from digital goods to tangible real estate and stocks.
              This versatility paved the way for the next milestone – the
              introduction of the Ethereum blockchain in 2015. Ethereum's
              revolutionary smart contracts enabled intricate, automated
              transactions on the blockchain, fostering the creation and
              management of intelligent property.
              <br />
              <br />
              Fast forward to today, and we see tangible expressions of smart
              vehicle evolution in systems like car immobilizers. These devices
              enhance traditional keys with secure protocol exchanges, ensuring
              only authorized individuals with the correct cryptographic tokens
              can activate the engine. Their impact is undeniable; in Africa,
              cars equipped with immobilizers represent just 2% of stolen
              vehicles despite constituting 28% of the car population. This
              success extends beyond vehicles, with cryptographic measures
              safeguarding modern possessions like smartphones, rendering stolen
              devices inoperable and protecting sensitive information.
              <br />
              <br />
              While these advancements are noteworthy, the full potential of
              crypto-activated property remains largely unexplored.
              Traditionally, private keys reside within physical objects like
              keys or SIM cards, restricting their transfer and manipulation.
              <br />
              <br />
              Smart vehicles challenge this paradigm by enabling ownership to be
              mediated through smart contracts.
              <br />
              <br />
              Integrating smart property into blockchain ecosystems unlocks a
              plethora of benefits – reduced transaction costs, enhanced
              transparency, robust security, and perhaps most importantly, the
              democratization of asset ownership previously accessible only to a
              select few.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Tokenization"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Tokenization
              </div>{" "}
              <br />
              The burgeoning realm of smart electric vehicles (EVs) is poised
              for a paradigm shift with the emergence of tokenization. This
              innovative approach involves fragmenting ownership into digital
              tokens, each representing a stake in a specific vehicle. These
              tokens unlock a plethora of possibilities, fundamentally
              redefining automobile ownership and reshaping the landscape of
              automotive finance.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Unlocking Value Through Collateralization"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Unlocking Value Through Collateralization
              </div>{" "}
              <br />
              Imagine a world where owning a smart EV empowers you to tap into
              its value as a source of readily available credit. Tokenization
              makes this a reality. By leveraging your EV's inherent worth as
              collateral, you gain access to a wider range of loan options,
              potentially securing favorable terms and unlocking valuable
              financial flexibility. This benefit extends beyond individual
              owners, offering manufacturers a novel channel for asset-backed
              financing, diversifying their financial instruments and unlocking
              untapped potential.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Enhancing Transparency, Empowering Lending"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Enhancing Transparency, Empowering Lending
              </div>{" "}
              <br />
              The magic of tokenization lies in its inherent transparency. Built
              upon the immutable foundations of blockchain technology, ownership
              records and transaction history become readily accessible and
              tamper-proof. This creates a secure and transparent ecosystem,
              fostering trust and enabling lenders to make informed credit
              decisions based on the complete and accurate picture of an EV's
              value. This data-driven approach mitigates risk, fosters
              responsible lending practices, and creates a more robust financial
              infrastructure for all stakeholders.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Beyond Redefining Ownership"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Beyond Redefining Ownership
              </div>{" "}
              <br />
              The implications of smart EV tokenization extend far beyond
              ownership structures. It fosters a more inclusive financial
              ecosystem by empowering individuals and businesses to leverage
              their assets effectively. This fosters economic growth, stimulates
              innovation, and paves the way for a future where mobility and
              financial opportunity are intertwined.
              <br />
              <br />
              The burgeoning world of smart EV tokenization represents a
              watershed moment in the automotive and financial landscape. By
              unlocking the hidden value of vehicles, streamlining ownership
              transparency, and creating new avenues for financial inclusion,
              this technology holds the potential to revolutionize the way we
              own, finance, and experience mobility in the years to come.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Distributing Egax Coin"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Distributing Egax Coin
              </div>{" "}
              <br />
              The path to involvement in a cryptocurrency community offers two
              main avenues: ownership and contribution. Both approaches hold
              merit, with each user adding value to the currency's ecosystem.
              Mutual exchange facilitated by a transparent and reliable
              accounting system serves as the bedrock for value creation within
              these communities, where individuals earn rewards through the
              contributions they make to one another.
              <br />
              <br />
              However, achieving equitable distribution of a cryptocurrency
              presents a significant challenge. While computation-based mining
              methods like those employed by Bitcoin and Egochain offer specific
              functionalities, their scope tends to be limited. Activities like
              solving cryptographic puzzles or performing computations for
              rewards often yield benefits of marginal societal impact and offer
              limited direct advantages to the currency's community.
              Additionally, economies of scale and market forces often lead to
              centralization, restricting participation in such distribution
              mechanisms to specialized entities with extensive resources.
              <br />
              <br />
              Therefore, it's crucial to recognize that computation-based mining
              ultimately resembles purchase, as it necessitates capital outlay
              for equipment or energy costs. Recognizing this inherent exchange
              dynamic highlights the need for alternative, more inclusive
              distribution models. Egochain's mileage-based approach, while
              innovative in its attempt to incentivize electric vehicle
              adoption, still relies on a pre-existing investment (vehicle
              ownership) and limits participant access.
              <br />
              <br />
              Moving forward, exploring alternative distribution methods that
              prioritize accessibility, transparency, and genuine contribution
              to the community's goals will be crucial. By focusing on these
              principles, we can foster truly inclusive and sustainable
              cryptocurrency ecosystems where value creation is shared among all
              participants, not just a select few.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Electric Vehicle Smart Charging System"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Electric Vehicle Smart Charging System
              </div>{" "}
              <br />
              The burgeoning growth of electric vehicles (EVs) presents a
              significant challenge to power distribution grids. Unmanaged, the
              high-demand energy requirements of EV charging could overwhelm
              existing infrastructure. To address this, a robust platform is
              needed to optimize EV charging, balancing user needs with grid
              capacity. Failure to act will lead to charging station scarcity
              and grid congestion in the near future.
              <br />
              <br />
              This paper proposes a novel smart EV charging infrastructure built
              on a Egochain blockchain platform. By capturing user-defined
              charging parameters (kWh & duration), the system leverages "smart
              charging" techniques to achieve grid stability. This innovative
              platform streamlines the ecosystem, connecting EV owners directly
              with charging stations, eliminating intermediaries. Egochain, a
              dedicated blockchain, facilitates flexible charging arrangements
              (power & time) through its native token rewards. This incentivizes
              off-peak charging, attracting investments to expand the charging
              network.
              <br />
              <br />
              Our simulations demonstrate a remarkable 50% increase in user
              acceptance with this smart charging system, compared to
              traditional methods. This paves the way for a sustainable and
              efficient future of EV charging, ensuring grid stability and user
              satisfaction.
              <br />
              <br />
              While electric vehicle (EV) technology is still in its early
              stages, the future of transportation points towards widespread
              adoption. This rapid growth, however, poses a significant
              challenge to power grids. Charging an EV requires almost twenty
              times the power of a typical North American household. While
              current low EV penetration and strategically installed charging
              points prevent grid congestion for now, stricter emission
              regulations and ambitious carbon neutrality goals in Europe and
              elsewhere promise a surge in EV ownership. The International
              Energy Agency projects that EVs will capture over 30% of the
              global market share by 2030. Therefore, developing optimal methods
              for integrating a large number of EVs into the grid is crucial.
              <br />
              <br />
              Nour et al. (2019) categorize EV charging into three types:
              uncontrolled, delayed, and smart. Uncontrolled charging, akin to
              manual on-off switching, occurs when an EV is plugged in and
              charges to full capacity. Delayed charging utilizes time-varying
              electricity tariffs to incentivize EV users to shift their
              charging to off-peak hours.
              <br />
              <br />
              Smart charging emerges as the most promising solution for the
              future. It utilizes algorithms to intelligently control charging
              points, potentially implemented by distribution system operators
              (DSOs) via communication channels to the stations. Two control
              architectures exist: centralized and decentralized. Centralized
              control involves aggregators purchasing power from multiple EV
              owners and acting as intermediaries between them and ancillary
              service markets (Daina et al., 2017). This contrasts with
              decentralized control, where EV owners directly influence charging
              flexibility based on market information and incentives offered by
              the charging point operator (CPO). Creating effective incentives
              for flexible charging preferences is therefore key to optimizing
              operation, minimizing grid congestion, and even allowing more EVs
              to be charged at a single station.
              <br />
              <br />
              Egochain has designed incentive mechanisms for charging
              preferences. We aim to demonstrate how these incentives can
              significantly reduce grid congestion while enabling more efficient
              charging at multi-point stations, paving the way for a seamless
              transition to a future dominated by electric vehicles.
              <br />
              <br />
              Figure1
              <img src="/img/whitepaper_img3.jpeg" alt="" />
              <br />
              <br />
              <b>Figure 1</b> presents the architectural blueprint of the EV
              charging market, outlining the participating actors and their
              interwoven flows of information and electricity. At the core of
              this ecosystem lie several key players:
              <span>
                <li>
                  <b> EV User:</b> The individual or entity owning and operating
                  an electric vehicle.
                </li>
                <li>
                  <b> Charge Point Operator (CPO):</b> The entity responsible
                  for managing and operating a charging station.
                </li>
                <li>
                  <b> eMobility Service Provider (eMSP):</b> A digital bridge
                  between EV users and CPOs, providing real-time information on
                  charging station availability, facilitating reservations, and
                  enabling payment functionalities.
                </li>
                <li>
                  <b>E-Mobility Clearing House:</b> The trusted entity that
                  handles the financial transactions between EV users and CPOs,
                  facilitated by eMSPs.
                </li>
                <li>
                  <b>Distribution System Operator (DSO):</b> The utility company
                  responsible for operating the low and medium voltage grids and
                  delivering electricity to end users.
                </li>
                <li>
                  <b>Electricity Supply Retailer:</b> The company selling
                  electricity to consumers, possessing grid access contracts to
                  purchase power from DSOs.
                </li>
              </span>
              <br />
              <br />
              Beyond the traditional network, Egochain emerges as a
              game-changer. This distributed blockchain platform leverages
              cryptographic signatures and consensus mechanisms to secure data
              transactions and computations within the Internet of Things (IoT).
              With its inherent transparency and trust, Egochain fuels smart
              contract functionality, automating agreements among participants
              and executing actions only when predefined conditions are met.
              <br />
              <br />
              This paper introduces a novel model that leverages Egochain's
              smart contracts to incentivize EV users for aligning their
              charging preferences with grid priorities. These incentives,
              issued in the form of EGAX tokens, act as a digital currency
              within the network, enabling users to offset future charging
              costs.
            </section>
            <div className="break_line_txt">APPROACH AND SIMULATIONS</div>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Smart Charging Architecture"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Smart Charging Architecture
              </div>{" "}
              <br />
              <b>Figure 2</b> illustrates the Egochain smart EV charging system.
              Moving beyond traditional models, Egochain leverages its
              blockchain technology to streamline billing and payment processes.
              Instead of relying on intermediaries like eMSPs and clearing
              houses, dedicated smart contract charge stations (cssc) deployed
              on the Egochain blockchain handle these functions. These csscs not
              only manage payments but also trigger smart charging for
              individual charge points (CPs), ensuring efficient energy
              distribution. Additionally, the system incentivizes EV users to
              participate in smart charging by rewarding them through csscs for
              offering flexible charging schedules.
              <br />
              <br />
              <img src="/img/whitepaper_img4.jpeg" alt="" />
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Charging Algorithm and Flexibility Offers"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Charging Algorithm and Flexibility Offers
              </div>{" "}
              <br />
              <b>Figure 3</b> outlines the decision-making process whenever a
              new charging request arrives. EV users specify their desired
              energy amount (E) and maximum charging time (T) through the
              system. To facilitate efficient evaluation, a time step of 15
              minutes is employed, ensuring each request within a given period
              is analyzed individually on a first-come-first-serve basis.
              Accepted requests initiate charging during the subsequent time
              interval.
              <br />
              <br />
              Upon receiving a new request, the system first assesses potential
              grid congestion. If accepting the request at full power, alongside
              existing ones, would overload the grid, the model explores
              alternative solutions. It investigates whether the user has
              designated any flexibility preferences, allowing for smart
              charging adjustments and potential congestion alleviation. In the
              absence of flexibility (fast charge demand), the request is
              accepted regardless. Otherwise, a fulfillment check determines if
              the proposed flexibility accommodates congestion mitigation while
              fulfilling the user's energy demand within the specified
              timeframe. Successful checks translate to acceptance, while
              failures result in request rejection, with the option to
              re-evaluate in the next interval if the user remains available.
              <br />
              <br />
              Therefore, flexibility refers to the charging time or power an EV
              user is willing to adjust in exchange for monetary rewards. As
              such, fair and transparent allocation mechanisms are crucial for
              managing these exchanges. The system utilizes a proportionate
              allocation mechanism to guarantee equitable distribution of
              incentives among participating users.
              <br />
              <br />
              <img src="/img/whitepaper_img5.jpeg" alt="" />
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Determining Electric Vehicle (EV) Flexibility for Next Time Step"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Determining Electric Vehicle (EV) Flexibility for Next Time Step
              </div>{" "}
              <br />
              This algorithm estimates the potential of an EV user to offer
              charging flexibility during the next time step.
              <br />
              <br />
              <b>Key parameters:</b>
              <br />
              <br />
              <span>
                <li>
                  <span>Es(i,n):</span> Energy supplied to EV (i) at time step
                  (n)
                </li>
                <li>
                  <span>Ts(i,n):</span> Charging time for EV (i) at time step
                  (n)
                </li>
                <li>
                  <span>P_N(i):</span> Nominal power of charging point (CP)
                  serving EV (i)
                </li>
                <li>
                  <span>TF(i,n):</span> Flexible time available for charging EV
                  (i) at time step (n)
                </li>
                <li>
                  <span>Fl(i,n+1):</span> Flexible offer by EV (i) for next time
                  step (n+1)
                </li>
              </span>
              <br />
              <br />
              <b>Algorithm:</b>
              <br />
              <br />
              <span>
                <span>
                  1. Calculate flexible time: TF(i,n) = Ts(i,n) - Es(i,n) /
                  P_N(i)
                </span>
                <br />
                <span>
                  2. Determine flexible offer:{" "}
                  {
                    "Fl(i,n+1) = { P_N(i) if TF(i,n) >= 15 minutes P_N(i) * TF(i,n) / 15 minutes otherwise }"
                  }
                </span>
              </span>
              <br />
              <br />
              <b>Explanation:</b>
              <br />
              <br />
              The algorithm first calculates the "flexible time" available for
              charging the EV (i) at the current time step (n). This is the
              difference between the scheduled charging time (Ts(i,n)) and the
              required time to reach the desired amount of energy with the
              nominal power of the CP (Es(i,n) / P_N(i)).
              <br />
              <br />
              Next, the algorithm estimates the flexible offer (Fl(i,n+1)) that
              the EV user is willing to provide for the next time step (n+1).
              This offer is equal to the full nominal power of the CP (P_N(i))
              if the available flexible time is at least 15 minutes. Otherwise,
              the offer is proportionally reduced based on the remaining
              flexible time.
              <br />
              <br />
              <b>Benefits:</b>
              <br />
              <br />
              <span>
                <li>
                  This algorithm provides a simple and efficient way to estimate
                  EV flexibility potential.
                </li>
                <li>
                  The use of a minimum flexible time threshold ensures practical
                  feasibility and reduces the impact of short-term fluctuations.
                </li>
                <li>
                  The dynamic offer based on remaining time incentivizes users
                  to participate and ensures efficient grid resource allocation.
                </li>
              </span>
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Decentralized Secure Charging with Egochain"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Decentralized Secure Charging with Egochain:
              </div>{" "}
              <br />
              For enhanced security and trust, we implemented Egochain, a
              blockchain platform, into the charging infrastructure. Each
              charging point (CP) houses a Raspberry Pi (RPi) running an
              Egochain node (Fig. 2).
              <br />
              <br />
              <b>Smart Contract Orchestrates Flexibility:</b>
              <span>
                <span>
                  {" "}
                  <span>1. </span> Cloud Deployment: The smart charging
                  algorithm and flexibility offers reside in the cloud.
                </span>
                <span>
                  {" "}
                  <span>2. </span> Smart Contract Development and Deployment: A
                  dedicated smart contract (SC) manages energy transactions on
                  the Egochain network. Its Application Binary Interface (ABI)
                  is integrated into a Python script facilitating blockchain
                  interaction.
                </span>
                <span>
                  {" "}
                  <span>3. </span>Regular Communication: Every 15 minutes, the
                  Python script retrieves EV user charging requests (E, T) and
                  calculates flexibility offers for the next slot. Accepted
                  offers are encrypted and stored on the Egochain blockchain.
                </span>
                <span>
                  {" "}
                  <span>4. </span>Parallel Backup: Each CPO's backend system
                  connects to the cloud and its local blockchain node. This
                  redundancy ensures data accessibility and direct interaction
                  with the cloud database and Python script.
                </span>
                <span>
                  {" "}
                  <span>5. </span>Rewarding Flexibility: Upon confirmed delivery
                  of the agreed-upon flexibility offer, the Egochain node
                  triggers EGAX token payout to the EV user, compensating them
                  for their energy and time flexibility.
                </span>
              </span>
              <br />
              <br />
              <b>Benefits:</b>
              <span>
                <li>
                  Enhanced Security: Blockchain technology guarantees
                  tamper-proof and transparent transaction records.
                </li>
                <li>
                  Decentralized Trust: Secure peer-to-peer interactions
                  eliminate the need for a central authority.
                </li>
                <li>
                  Automated Flexibility Rewards: Smart contracts automate reward
                  distribution based on agreed-upon flexibility offers.
                </li>
              </span>
              <br />
              <br />
              This approach fosters a secure, transparent, and rewarding
              charging ecosystem for both EV users and CPOs.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Simulation Parameters"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Simulation Parameters
              </div>{" "}
              <br />
              This section outlines the key parameters governing our EV charging
              demand model.
              <br />
              <br />
              <span>
                <li>
                  Average Daily Travel Distance: Based on data from BMVi (2019),
                  the average German travels 39km daily.
                </li>
                <li>
                  Weekly Driving Range: Translating daily travel to a weekly
                  basis, an individual accumulates approximately 280km of weekly
                  driving.
                </li>
                <li>
                  EV Battery Efficiency: Studies by AUTOBEST (2018) indicate an
                  average driving range of 7km per kWh for electric vehicles.
                </li>
                <li>
                  Weekly Energy Demand: Combining weekly travel distance with
                  battery efficiency, an average EV user requires 40kWh of
                  energy to fulfill their weekly mobility needs.
                </li>
              </span>
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Dynamic Charging Model Based on User Activity"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Dynamic Charging Model Based on User Activity:
              </div>{" "}
              <br />
              To accommodate diverse user behavior and charging needs, we've
              implemented a time-based charging system categorized by typical
              dwell times. This flexible approach helps us accurately model and
              predict charging demand across various locations and throughout
              the week.
              <br />
              <br />
              <span>
                <li>
                  Category 1 (1-2 hours): High-frequency charging for short
                  stops, commonly found in shopping malls, restaurants, and
                  public parking areas.
                </li>
                <li>
                  Category 2 (2-4 hours): Moderate-duration charging for
                  extended stays, such as workplaces, street parking, and
                  airport terminals.
                </li>
                <li>
                  Category 3 (4-8 hours): Long-term charging for overnight or
                  extended parking, typically occurring in residential areas and
                  hotels.
                </li>
              </span>
              <br />
              <br />
              By leveraging this data-driven categorization, we can efficiently
              allocate resources, optimize charging infrastructure deployment,
              and ultimately, deliver a seamless and cost-effective experience
              for our users.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Simulation Scenarios and Methodology"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Simulation Scenarios and Methodology
              </div>{" "}
              <br />
              The performance of the model was evaluated through simulations
              under two distinct charging scenarios, each focusing on the
              arrival rate of charging requests at the pool:
              <br />
              <br />
              <span>
                <li>
                  Scenario 1: Low Arrival Rate: A single charging request
                  arrives every time step (15 minutes), representing a moderate
                  demand on the charging pool.
                </li>
                <li>
                  Scenario 2: High Arrival Rate: Two charging requests arrive
                  every time step, simulating a peak demand situation.
                </li>
              </span>
              <br />
              <br />
              <b>Both scenarios assumed the following conditions: </b>
              <br />
              <br />
              <span>
                <li>
                  Charging Power: Each charging point (CP) offers a maximum of
                  11 kW.
                </li>
                <li>
                  EV Demand: User demand for charging power is randomly
                  generated, ranging from 10 to 40 kWh (equivalent to 50-200 km)
                  with charging times between 1 and 4 hours.
                </li>
                <li>
                  Plug Availability: All charging requests are accepted as long
                  as sufficient power is available from the grid and no plug
                  limitations exist.
                </li>
              </span>
              <br />
              <br />
              Grid power availability serves as a key variable in the analysis.
              It starts at 33 kW and is progressively increased by 11 kW
              increments. Through repeated simulations (100 iterations per
              scenario), the model's performance is assessed by comparing the
              total electricity sold and charging request acceptance rate for
              both uncontrolled and smart charging strategies under varying grid
              power limits, EV energy demands, and available charging times.
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Results and Discussion"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Results and Discussion
              </div>{" "}
              <br />
              Scenario 1: Figure 4 presents the results for a ten-hour charging
              period under varying grid power limits. The blue, orange, and
              yellow bars represent:
              <br />
              <br />
              <span>
                <li>
                  Total electricity sold:{" "}
                  <span>
                    <li>Blue: Uncontrolled charging.</li>
                    <li>Orange: Smart charging.</li>
                  </span>
                </li>
                <li>
                  Utilized flexibility: Electricity supplied to EVs through
                  smart charging (difference between orange and blue bars).
                </li>
              </span>
              <br />
              <br />
              The dotted lines depict the average acceptance rate of
              uncontrolled (blue) and smart (green) charging.
              <br />
              <br />
              At a 33 kW power limit, uncontrolled charging achieves an average
              acceptance rate of 38%, while smart charging reaches 70%. This
              represents a 1.84 times higher acceptance rate for smart charging.
              As the power limit increases, the difference in acceptance rates
              diminishes, reaching zero by 120 kW. This indicates that beyond
              120 kW, all EVs could be accommodated, demonstrating the
              effectiveness of smart charging in accommodating demand within
              existing grid constraints.
              <br />
              <br />
              Scenario 2: Figure 5 shows the results for double the charging
              requests per time step. Acceptance rates decrease to 23%
              (uncontrolled) and 43% (smart) at a 33 kW power limit. Similar to
              Scenario 1, the acceptance rate gap diminishes with increasing
              power limits, vanishing at 143 kW.
              <br />
              <br />
              Interestingly, at the 33 kW power limit, uncontrolled charging
              only supplies 309 kWh to EVs, while smart charging provides 603
              kWh, equaling the uncontrolled scenario at a 66 kW power limit.
              This implies that smart charging, by utilizing flexibility,
              effectively expands the grid capacity by 33 kW.
              <br />
              <br />
              The yellow bars highlight the utilized flexibility, starting at
              its peak of 364 kWh at 88 kW and gradually decreasing to zero at
              220 kW. This phenomenon reveals that as the grid capacity
              increases, relying on flexibility decreases. Flexibility
              contributions are most significant under limited grid capacity,
              enabling additional EV charging.
              <br />
              <br />
              In conclusion, these simulations demonstrate the remarkable
              capabilities of smart charging in:
              <br />
              <br />
              <span>
                <li>
                  Increasing EV charging acceptance rates, especially during
                  peak demand.
                </li>
                <li>
                  Effectively expanding grid capacity by utilizing flexibility
                  under limited power availability.
                </li>
                <li>
                  Optimizing resource utilization by prioritizing grid
                  electricity when sufficient capacity exists.
                </li>
              </span>
              <br />
              <br />
              These findings offer compelling evidence for the widespread
              adoption of smart charging solutions as a key strategy for
              integrating high EV penetration into future energy grids.
              <br />
              <br />
              <img src="/img/whitepaper_img6.jpeg" alt="" />
            </section>
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            {/* =============== */}
            <section
              id="Conclusion"
              className="whitePaper_div_area_body_area_section"
            >
              <div className="whitePaper_div_area_body_area_section_title">
                Conclusion
              </div>{" "}
              <br />
              The Egochain blockchain, as detailed in this whitepaper, serves as
              a catalyst for the widespread acceptance of electric vehicles. By
              fostering the establishment of intelligent charging stations, the
              blockchain introduces incentives that encourage electric vehicle
              (EV) ownership. The associated rewards, denoted as EGAX, can be
              employed to cover EV charging expenses, transaction fees within
              the Egochain blockchain, and even contribute to EV acquisitions.
              Additionally, the ecosystem employs EGC, the debt token, to
              facilitate accessible credit for EV manufacturing, with interest
              payments settled in EGAX. This integrated approach not only
              promotes sustainable transportation but also establishes a
              comprehensive and self-sustaining ecosystem for the electric
              vehicle industry.
            </section>
          </div>
        </div>
      </div>
      <img
        src="/img/hero_bg_light.svg"
        alt=""
        className="home_div_section1_bg_light"
      />
      <img
        src="/img/test_hero_light2.svg"
        alt=""
        className="home_div_section1_bg_light2"
      />
      <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
    </div>
  );
};

export default WhitePaper;
