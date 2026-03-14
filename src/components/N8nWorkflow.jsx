import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { 
  Play, 
  Bot, 
  Database, 
  Wrench, 
  GitMerge, 
  MessageSquare, 
  UserPlus, 
  CloudCog, 
  Layout, 
  FileText 
} from 'lucide-react';

// Componente interno para las líneas animadas
const AnimatedEdge = ({ d, dashed = false, delay = 0 }) => (
  <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
    {/* Línea base estática */}
    <path 
      d={d} 
      fill="none" 
      stroke="rgba(255,255,255,0.15)" 
      strokeWidth="3" 
      strokeDasharray={dashed ? "5,5" : "none"}
    />
    {/* Línea de "flujo de datos" animada */}
    {!dashed && (
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay }}
      />
    )}
  </svg>
);

const N8nWorkflow = () => {
  // Animación para el contenedor general
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  // Animación para cada nodo
  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  // SVG Paths para las conexiones
  // Path 1: Trigger -> AI Agent
  const path1 = "M 150 200 L 300 200";
  // Path 2: AI Agent -> Decision (Is Manager?)
  const path2 = "M 550 200 L 700 200";
  // Path 3: Decision -> Slack (True)
  const path3 = "M 900 180 C 950 180, 950 100, 1050 100";
  // Path 4: Decision -> DB (False)
  const path4 = "M 900 220 C 950 220, 950 300, 1050 300";

  // Caminos secundarios punteados
  // AI Agent -> Chat Model
  const pathModel = "M 425 250 L 425 320";
  // AI Agent -> Memory
  const pathMemory = "M 425 250 L 325 320";
  // AI Agent -> Tools
  const pathTools = "M 425 250 L 525 320";
  
  // Nodos integraciones extra
  const pathEntra = "M 425 100 L 330 150";
  const pathJira = "M 425 100 L 520 150";

  return (
    <div style={{ padding: '40px 0', width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '1250px', height: '450px', background: '#121212', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        
        {/* Fondo cuadriculado tipo Canvas */}
        <div style={{ 
          position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
          style={{ position: 'relative', width: '100%', height: '100%', zIndex: 10 }}
        >
          {/* ---- CONEXIONES (EDGES) ---- */}
          <AnimatedEdge d={path1} delay={0} />
          <AnimatedEdge d={path2} delay={1} />
          <AnimatedEdge d={path3} delay={2} />
          <AnimatedEdge d={path4} delay={2} />
          <AnimatedEdge d={pathModel} dashed />
          <AnimatedEdge d={pathMemory} dashed />
          <AnimatedEdge d={pathTools} dashed />
          <AnimatedEdge d={pathEntra} dashed />
          <AnimatedEdge d={pathJira} dashed />

          {/* ---- NODOS ---- */}

          {/* 1. Trigger Node */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '160px', left: '40px' }} className="node">
            <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #ff4d4f', borderRadius: '12px', padding: '15px 20px', width: '220px', boxShadow: '0 10px 15px -3px rgba(255, 77, 79, 0.2)' }}>
              <div style={{ background: 'rgba(255,77,79,0.15)', padding: '10px', borderRadius: '8px', marginRight: '15px' }}>
                <FileText size={24} color="#ff4d4f" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>On "Create User"</div>
                <div style={{ color: '#aaa', fontSize: '11px', marginTop: '4px' }}>Form Submission</div>
              </div>
            </div>
          </motion.div>

          {/* 2. Integrations (Top) */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '50px', left: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #1890ff', borderRadius: '8px', padding: '8px 12px', width: '160px' }}>
               <CloudCog size={16} color="#1890ff" style={{ marginRight: '10px' }} />
               <span style={{ color: '#fff', fontSize: '12px' }}>Microsoft Entra ID</span>
            </div>
          </motion.div>
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '50px', left: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #1890ff', borderRadius: '8px', padding: '8px 12px', width: '140px' }}>
               <Layout size={16} color="#1890ff" style={{ marginRight: '10px' }} />
               <span style={{ color: '#fff', fontSize: '12px' }}>Jira Software</span>
            </div>
          </motion.div>

          {/* 3. Central AI Agent Node */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '150px', left: '300px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(180deg, #2b2b36 0%, #1e1e24 100%)', border: '2px solid var(--color-primary)', borderRadius: '16px', padding: '20px', width: '250px', boxShadow: '0 0 30px rgba(0, 86, 179, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ background: 'var(--color-primary)', padding: '12px', borderRadius: '12px', marginRight: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={32} color="#fff" />
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>AI Agent</div>
                  <div style={{ color: 'var(--color-accent)', fontSize: '12px', marginTop: '2px', fontWeight: '600' }}>Tools Agent</div>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '10px' }} />
              <div style={{ fontSize: '11px', color: '#999', textAlign: 'center' }}>Processing logical decisions</div>
            </div>
          </motion.div>

          {/* 4. Sub-nodes (Bottom of AI) */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '320px', left: '260px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #722ed1', borderRadius: '8px', padding: '8px 12px', width: '110px' }}>
               <Database size={16} color="#722ed1" style={{ marginRight: '8px' }} />
               <span style={{ color: '#fff', fontSize: '11px' }}>Memory</span>
            </div>
          </motion.div>
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '320px', left: '380px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #eb2f96', borderRadius: '8px', padding: '8px 12px', width: '130px' }}>
               <MessageSquare size={16} color="#eb2f96" style={{ marginRight: '8px' }} />
               <span style={{ color: '#fff', fontSize: '11px' }}>Chat Model</span>
            </div>
          </motion.div>
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '320px', left: '520px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #fa8c16', borderRadius: '8px', padding: '8px 12px', width: '90px' }}>
               <Wrench size={16} color="#fa8c16" style={{ marginRight: '8px' }} />
               <span style={{ color: '#fff', fontSize: '11px' }}>Tools</span>
            </div>
          </motion.div>

          {/* 5. Decision Node (If) */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '165px', left: '700px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #9b59b6', borderRadius: '12px', padding: '15px', width: '200px', boxShadow: '0 8px 16px rgba(155, 89, 182, 0.2)' }}>
              <div style={{ background: 'rgba(155,89,182,0.15)', padding: '10px', borderRadius: '8px', marginRight: '15px' }}>
                <GitMerge size={24} color="#9b59b6" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>If Condition</div>
                <div style={{ color: '#aaa', fontSize: '11px', marginTop: '4px' }}>Is a manager?</div>
              </div>
            </div>
            {/* True/False labels for paths */}
            <div style={{ position: 'absolute', right: '-35px', top: '-15px', color: '#52c41a', fontSize: '12px', fontWeight: 'bold', background: '#1c1c1c', padding: '2px 6px', borderRadius: '4px' }}>True</div>
            <div style={{ position: 'absolute', right: '-35px', bottom: '-15px', color: '#ff4d4f', fontSize: '12px', fontWeight: 'bold', background: '#1c1c1c', padding: '2px 6px', borderRadius: '4px' }}>False</div>
          </motion.div>

          {/* 6. Action Nodes */}
          {/* True Path: Slack */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '65px', left: '1050px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid #52c41a', borderRadius: '12px', padding: '15px', width: '180px', boxShadow: '0 8px 16px rgba(82, 196, 26, 0.15)' }}>
              <div style={{ background: 'rgba(82,196,26,0.15)', padding: '10px', borderRadius: '8px', marginRight: '15px' }}>
                <MessageSquare size={24} color="#52c41a" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>Slack</div>
                <div style={{ color: '#aaa', fontSize: '11px', marginTop: '4px' }}>Add to channel</div>
              </div>
            </div>
          </motion.div>

          {/* False Path: Update Profile */}
          <motion.div variants={nodeVariants} style={{ position: 'absolute', top: '265px', left: '1050px' }}>
             <div style={{ display: 'flex', alignItems: 'center', background: '#252528', border: '1px solid var(--color-secondary)', borderRadius: '12px', padding: '15px', width: '180px', boxShadow: '0 8px 16px rgba(255, 140, 0, 0.15)' }}>
              <div style={{ background: 'rgba(255,140,0,0.15)', padding: '10px', borderRadius: '8px', marginRight: '15px' }}>
                <UserPlus size={24} color="var(--color-secondary)" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>Database</div>
                <div style={{ color: '#aaa', fontSize: '11px', marginTop: '4px' }}>Update profile</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default N8nWorkflow;