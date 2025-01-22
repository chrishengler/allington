import { useEffect, useState } from "react";
import { getFaqs } from "../api/api";
import FaqEntry from "./FaqEntry";

function FaqList() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFaqs()
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error("Error fetching faqs", error));
  }, []);

  return (
    <div className="faqs">
      {faqs.map((faqEntry) => (
        <FaqEntry faqEntry={faqEntry} key={faqEntry.short_id}/>
      ))}
    </div>
  );
}

export default FaqList