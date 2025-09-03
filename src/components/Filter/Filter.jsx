import { useState } from "react";

const Filter = ({ products, onFilter }) => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [filters, setFilters] = useState({
    nom: "",
    alcoolMin: "",
    alcoolMax: "",
    amertumeMin: "",
    amertumeMax: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    let filtered = products;

    if (filters.nom) {
      filtered = filtered.filter((p) =>
        p.nom.toLowerCase().includes(filters.nom.toLowerCase())
      );
    }

    if (filters.alcoolMin) {
      filtered = filtered.filter(
        (p) =>
          parseFloat(
            p.ficheTechnique.find((f) => f.TauxAlcool)?.TauxAlcool.replace(
              " % / vol",
              ""
            )
          ) >= parseFloat(filters.alcoolMin)
      );
    }

    if (filters.alcoolMax) {
      filtered = filtered.filter(
        (p) =>
          parseFloat(
            p.ficheTechnique.find((f) => f.TauxAlcool)?.TauxAlcool.replace(
              " % / vol",
              ""
            )
          ) <= parseFloat(filters.alcoolMax)
      );
    }

    if (filters.amertumeMin) {
      filtered = filtered.filter(
        (p) =>
          parseFloat(p.ficheTechnique.find((f) => f.Amertume)?.Amertume) >=
          parseFloat(filters.amertumeMin)
      );
    }

    if (filters.amertumeMax) {
      filtered = filtered.filter(
        (p) =>
          parseFloat(p.ficheTechnique.find((f) => f.Amertume)?.Amertume) <=
          parseFloat(filters.amertumeMax)
      );
    }

    onFilter(filtered);
  };

  const resetFilters = () => {
    const empty = {
      nom: "",
      alcoolMin: "",
      alcoolMax: "",
      amertumeMin: "",
      amertumeMax: "",
    };
    setFilters(empty);
    onFilter(products);
  };

  return (
    <div className="mb-4 text-[0.75rem] sm:text-[0.875rem]">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-sm sm:text-base">Filtres</h3>
        <button
          className="text-xs sm:text-sm text-gray-600 underline"
          onClick={() => setFiltersVisible(!filtersVisible)}
        >
          {filtersVisible ? "Masquer" : "Afficher"}
        </button>
      </div>

      {filtersVisible && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-1">
          <input
            type="text"
            name="nom"
            value={filters.nom}
            onChange={handleChange}
            placeholder="Nom du produit"
            className="border p-1 sm:p-2 rounded w-full text-[0.65rem] sm:text-[0.75rem]"
          />
          <input
            type="number"
            name="alcoolMin"
            value={filters.alcoolMin}
            onChange={handleChange}
            placeholder="Alcool min (%)"
            className="border p-1 sm:p-2 rounded w-full text-[0.65rem] sm:text-[0.75rem]"
          />
          <input
            type="number"
            name="alcoolMax"
            value={filters.alcoolMax}
            onChange={handleChange}
            placeholder="Alcool max (%)"
            className="border p-1 sm:p-2 rounded w-full text-[0.65rem] sm:text-[0.75rem]"
          />
          <input
            type="number"
            name="amertumeMin"
            value={filters.amertumeMin}
            onChange={handleChange}
            placeholder="Amertume min (IBU)"
            className="border p-1 sm:p-2 rounded w-full text-[0.65rem] sm:text-[0.75rem]"
          />
          <input
            type="number"
            name="amertumeMax"
            value={filters.amertumeMax}
            onChange={handleChange}
            placeholder="Amertume max (IBU)"
            className="border p-1 sm:p-2 rounded w-full text-[0.65rem] sm:text-[0.75rem]"
          />
        </div>
      )}

      {/* Badges filtres actifs */}
      <div className="flex flex-wrap gap-1 mb-1">
        {Object.entries(filters).map(([key, value]) => {
          if (value)
            return (
              <span
                key={key}
                className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded text-[0.65rem] sm:text-[0.75rem]"
              >
                {key}: {value}
              </span>
            );
          return null;
        })}
      </div>

      <div className="flex gap-1">
        <button
          onClick={applyFilters}
          className="bg-[#e8e5ce] text-gray-900 py-1 px-2 rounded hover:brightness-90 text-[0.65rem] sm:text-[0.75rem] transition"
        >
          Appliquer
        </button>
        <button
          onClick={resetFilters}
          className="bg-red-200 text-red-800 py-1 px-2 rounded hover:brightness-90 text-[0.65rem] sm:text-[0.75rem] transition"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

export default Filter;
