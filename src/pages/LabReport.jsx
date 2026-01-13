import { useMemo, useState } from 'react';
import LabReportHeader from '../components/labreport/LabReportHeader';
import LabReportsTable from '../components/labreport/LabReportsTable';
import LabReportsPagination from '../components/labreport/LabReportsPagination';
import TrustCertification from '../components/labreport/TrustCertification';
import LabReportCta from '../components/labreport/LabReportCta';
import ReportModal from '../components/labreport/ReportModal';

const LabReport = () => {
  const [query, setQuery] = useState('');
  const [testType, setTestType] = useState('');
  const [status, setStatus] = useState('');
  const [activeReportId, setActiveReportId] = useState(null);

  const reports = useMemo(
    () => [
      {
        id: 'report-1',
        date: '2024-11-15',
        product: 'Premium Pod Kit V2',
        sku: 'PPK-V2-001',
        lot: 'LOT-2024-1115',
        testType: 'Heavy Metals',
        testTypeValue: 'heavy-metals',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
      {
        id: 'report-2',
        date: '2024-11-14',
        product: 'Strawberry E-Liquid 30ml',
        sku: 'SEL-30-002',
        lot: 'LOT-2024-1114',
        testType: 'Nicotine Content',
        testTypeValue: 'nicotine',
        statusValue: 'warning',
        statusLabel: 'Trace Amounts',
        statusClass: 'status-warning',
      },
      {
        id: 'report-3',
        date: '2024-11-13',
        product: 'Disposable Vape 2000 Puffs',
        sku: 'DV-2000-003',
        lot: 'LOT-2024-1113',
        testType: 'Purity Analysis',
        testTypeValue: 'purity',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
      {
        id: 'report-4',
        date: '2024-11-12',
        product: 'Mesh Coil Tank',
        sku: 'MCT-001-004',
        lot: 'LOT-2024-1112',
        testType: 'Microbiological',
        testTypeValue: 'microbiological',
        statusValue: 'passed',
        statusLabel: 'Passed',
        statusClass: 'status-passed',
      },
    ],
    []
  );

  const filteredReports = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      const matchesQuery =
        !q ||
        r.lot.toLowerCase().includes(q) ||
        r.sku.toLowerCase().includes(q) ||
        r.product.toLowerCase().includes(q);
      const matchesType = !testType || r.testTypeValue === testType;
      const matchesStatus = !status || r.statusValue === status;
      return matchesQuery && matchesType && matchesStatus;
    });
  }, [query, reports, status, testType]);

  const activeReport = useMemo(
    () => reports.find((r) => r.id === activeReportId) ?? null,
    [activeReportId, reports]
  );

  return (
    <>
      <main id="lab-reports-main" className="container mx-auto px-6 py-12">
        <LabReportHeader
          query={query}
          setQuery={setQuery}
          testType={testType}
          setTestType={setTestType}
          status={status}
          setStatus={setStatus}
        />

        <LabReportsTable reports={filteredReports} onView={setActiveReportId} />
        <LabReportsPagination />
        <TrustCertification />
        <LabReportCta />
      </main>

      <ReportModal report={activeReport} onClose={() => setActiveReportId(null)} />
    </>
  );
};

export default LabReport;

